import React, { useState } from "react";
import { db, storage } from "../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

// helper — checks if a filename looks like an image
function isImage(fileName) {
  if (!fileName) return false;
  const ext = fileName.split(".").pop().toLowerCase();
  return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext);
}

function DataCard({ task, onEdit }) {
  const [imgError, setImgError] = useState(false);

  let badgeClass = "badge-pending";
  let statusIcon = "🕐";

  if (task.status === "In Progress") {
    badgeClass = "badge-progress";
    statusIcon = "⚙️";
  } else if (task.status === "Completed") {
    badgeClass = "badge-done";
    statusIcon = "✅";
  }

  let cardClass = "task-card";
  if (task.status === "In Progress") cardClass += " card-progress";
  else if (task.status === "Completed") cardClass += " card-done";
  else cardClass += " card-pending";

  async function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    // clean up the attached file from storage first
    if (task.storagePath) {
      try {
        await deleteObject(ref(storage, task.storagePath));
      } catch {
        // file might already be deleted — carry on
      }
    }

    await deleteDoc(doc(db, "tasks", task.id));
  }

  function formatDate(timestamp) {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className={cardClass}>
      {/* top row: task info + action buttons */}
      <div className="card-row">
        <div className="card-top">
          <span className="card-status-icon">{statusIcon}</span>
          <div className="card-content">
            <h3 className="card-title">{task.title}</h3>
            {task.description && (
              <p className="card-desc">{task.description}</p>
            )}
            <div className="card-meta">
              <span className={`status-badge ${badgeClass}`}>{task.status}</span>
              <span className="card-date"> {formatDate(task.createdAt)}</span>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <button className="action-btn edit-btn" onClick={() => onEdit(task)}>
             Edit
          </button>
          <button className="action-btn delete-btn" onClick={handleDelete}>
             Delete
          </button>
        </div>
      </div>

      {/* file attachment — shown only when a file was uploaded */}
      {task.fileURL && (
        <div className="card-attachment">
          {isImage(task.fileName) && !imgError ? (
            <a href={task.fileURL} target="_blank" rel="noreferrer">
              <img
                src={task.fileURL}
                alt={task.fileName}
                className="attachment-img"
                onError={() => setImgError(true)}
              />
            </a>
          ) : (
            <a
              href={task.fileURL}
              target="_blank"
              rel="noreferrer"
              className="attachment-link"
            >
              📎 {task.fileName || "View attachment"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default DataCard;
