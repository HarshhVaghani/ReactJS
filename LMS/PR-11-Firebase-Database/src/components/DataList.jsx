import React, { useState } from "react";
import DataCard from "./DataCard";

function DataList({ tasks, onEdit }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  let visibleTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const matchesFilter = filter === "All" || task.status === filter;
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    if (matchesFilter && matchesSearch) {
      visibleTasks.push(task);
    }
  }

  return (
    <div className="list-section">
      <div className="list-header">
        <div>
          <h2 className="list-title">📋 Task List</h2>
          <p className="list-subtitle">
            Showing {visibleTasks.length} of {tasks.length} tasks
          </p>
        </div>

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* filter buttons */}
      <div className="filter-tabs">
        <button
          className={`filter-tab ${filter === "All" ? "tab-active" : ""}`}
          onClick={() => setFilter("All")}
        >
          All ({tasks.length})
        </button>
        <button
          className={`filter-tab ${filter === "Pending" ? "tab-active" : ""}`}
          onClick={() => setFilter("Pending")}
        >
          Pending ({tasks.filter((t) => t.status === "Pending").length})
        </button>
        <button
          className={`filter-tab ${filter === "In Progress" ? "tab-active" : ""}`}
          onClick={() => setFilter("In Progress")}
        >
          In Progress ({tasks.filter((t) => t.status === "In Progress").length})
        </button>
        <button
          className={`filter-tab ${filter === "Completed" ? "tab-active" : ""}`}
          onClick={() => setFilter("Completed")}
        >
          Completed ({tasks.filter((t) => t.status === "Completed").length})
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📋</p>
          <h3>No tasks yet</h3>
          <p>Use the form to add your first task.</p>
        </div>
      ) : visibleTasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">🔍</p>
          <h3>No results found</h3>
          <p>Try changing your search or filter.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {visibleTasks.map((task) => (
            <DataCard key={task.id} task={task} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DataList;
