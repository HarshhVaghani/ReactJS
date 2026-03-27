import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";

function DataForm({ editTask, clearEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }, [editTask]);

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
        await updateDoc(doc(db, "tasks", editTask.id), {
          title: title,
          description: description,
          status: status,
          updatedAt: serverTimestamp(),
        });
        clearEdit();
      } else {
        await addDoc(collection(db, "tasks"), {
          title: title,
          description: description,
          status: status,
          createdAt: serverTimestamp(),
        });
      }

      setTitle("");
      setDescription("");
      setStatus("Pending");
    } catch (err) {
      setError("Something went wrong. Please check your Firebase config.");
      console.log(err);
    }

    setLoading(false);
  }

  function handleCancel() {
    clearEdit();
    setTitle("");
    setDescription("");
    setStatus("Pending");
    setError("");
  }

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

        <div className="form-actions">
          {editTask && (
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          )}
          <button type="submit" className={`btn ${editTask ? "btn-update" : "btn-add"}`} disabled={loading}>
            {loading ? "Saving..." : editTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataForm;
