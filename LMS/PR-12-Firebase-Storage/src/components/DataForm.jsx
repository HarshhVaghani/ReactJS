import React, { useState, useEffect, useRef } from "react";
import { db, storage } from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

function DataForm({ editTask, clearEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
      // don't pre-fill file input — user can choose to replace or keep existing
      setFile(null);
      setUploadProgress(0);
    } else {
      resetForm();
    }
  }, [editTask]);

  function resetForm() {
    setTitle("");
    setDescription("");
    setStatus("Pending");
    setFile(null);
    setUploadProgress(0);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    // basic size check — keep it under 5 MB
    if (selected.size > 5 * 1024 * 1024) {
      setError("File is too large. Max allowed size is 5 MB.");
      e.target.value = "";
      return;
    }

    setError("");
    setFile(selected);
  }

  // upload the selected file and return URL + meta
  async function uploadFile(taskId) {
    return new Promise((resolve, reject) => {
      const storagePath = `task-files/${taskId}/${file.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (err) => {
          setUploading(false);
          reject(err);
        },
        async () => {
          const fileURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploading(false);
          resolve({ fileURL, fileName: file.name, storagePath });
        }
      );
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Please enter a task title.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (editTask) {
        const updates = {
          title,
          description,
          status,
          updatedAt: serverTimestamp(),
        };

        // user picked a new file — replace old one
        if (file) {
          if (editTask.storagePath) {
            try {
              await deleteObject(ref(storage, editTask.storagePath));
            } catch {
              // old file might already be gone, not a problem
            }
          }
          const { fileURL, fileName, storagePath } = await uploadFile(editTask.id);
          updates.fileURL = fileURL;
          updates.fileName = fileName;
          updates.storagePath = storagePath;
        }

        await updateDoc(doc(db, "tasks", editTask.id), updates);
        clearEdit();
      } else {
        // create the doc first so we have an ID to use as the storage folder
        const docRef = await addDoc(collection(db, "tasks"), {
          title,
          description,
          status,
          createdAt: serverTimestamp(),
        });

        if (file) {
          const { fileURL, fileName, storagePath } = await uploadFile(docRef.id);
          await updateDoc(docRef, { fileURL, fileName, storagePath });
        }
      }

      resetForm();
    } catch (err) {
      setError("Something went wrong. Please check your Firebase config.");
      console.error(err);
    }

    setLoading(false);
  }

  function handleCancel() {
    clearEdit();
    resetForm();
  }

  const isBusy = loading || uploading;

  return (
    <div className="form-card">
      <div className="form-header">
        <div className={`form-header-icon ${editTask ? "edit-mode" : ""}`}>
          {editTask ? "Edit" : "Add"}
        </div>
        <div>
          <h2 className="form-title">{editTask ? "Update Task" : "Add New Task"}</h2>
          <p className="form-subtitle">
            {editTask ? "Edit the task details below" : "Fill in the details to add a task"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label className="field-label">Task Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Complete the assignment"
            className="field-input"
          />
          {error && <p className="error-msg">{error}</p>}
        </div>

        <div className="field-group">
          <label className="field-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some details (optional)..."
            rows={3}
            className="field-input field-textarea"
          />
        </div>

        <div className="field-group">
          <label className="field-label">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="field-input"
          >
            <option value="Pending"> Pending</option>
            <option value="In Progress"> In Progress</option>
            <option value="Completed"> Completed</option>
          </select>
        </div>

        {/* file attachment */}
        <div className="field-group">
          <label className="field-label">
            Attach File{" "}
            <span style={{ fontWeight: 400, color: "#888", fontSize: "0.8rem" }}>
              (max 5 MB)
            </span>
          </label>

          {/* show existing file when editing */}
          {editTask && editTask.fileURL && !file && (
            <div className="current-file-note">
              Current:&nbsp;
              <a
                href={editTask.fileURL}
                target="_blank"
                rel="noreferrer"
                className="file-link"
              >
                {editTask.fileName || "view file"}
              </a>
              &nbsp;— pick a new file to replace it
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="field-input file-input"
          />

          {uploading && (
            <div className="upload-progress-wrap">
              <div
                className="upload-progress-bar"
                style={{ width: `${uploadProgress}%` }}
              />
              <span className="upload-progress-label">{uploadProgress}%</span>
            </div>
          )}
        </div>

        <div className="form-actions">
          {editTask && (
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`btn ${editTask ? "btn-update" : "btn-add"}`}
            disabled={isBusy}
          >
            {isBusy
              ? uploading
                ? `Uploading ${uploadProgress}%...`
                : "Saving..."
              : editTask
              ? "Update Task"
              : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataForm;
