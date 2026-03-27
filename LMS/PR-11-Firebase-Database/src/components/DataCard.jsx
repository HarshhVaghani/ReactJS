import React from "react";
import { db } from "../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

function DataCard({ task, onEdit }) {

  let badgeClass = "badge-pending";
  let statusIcon = "🕐";

  if (task.status === "In Progress") {
    badgeClass = "badge-progress";
  } else if (task.status === "Completed") {
    badgeClass = "badge-done";
  }

  let cardClass = "task-card";
  if (task.status === "In Progress") cardClass += " card-progress";
  else if (task.status === "Completed") cardClass += " card-done";
  else cardClass += " card-pending";

  async function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      await deleteDoc(doc(db, "tasks", task.id));
    }
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
  );
}

export default DataCard;
