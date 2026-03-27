import React from "react";

function Header({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="brand-icon">HV</div>
          <div>
            <h1 className="brand-title">React Firebase</h1>
            <p className="brand-subtitle">Task Manager</p>
          </div>
        </div>

        <div className="header-stats">
          <div className="stat-chip chip-total">
            <span className="stat-num">{totalTasks}</span>
            <span className="stat-lbl">Total</span>
          </div>
          <div className="stat-chip chip-pending">
            <span className="stat-num">{pendingTasks}</span>
            <span className="stat-lbl">Pending</span>
          </div>
          <div className="stat-chip chip-done">
            <span className="stat-num">{completedTasks}</span>
            <span className="stat-lbl">Done</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
