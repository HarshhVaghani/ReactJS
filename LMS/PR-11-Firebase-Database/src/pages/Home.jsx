import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Header from "../components/Header";
import DataForm from "../components/DataForm";
import DataList from "../components/DataList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(true);

  // listen for real-time changes from Firestore
  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
      setLoading(false);
    });

    // cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  // count tasks by status for the header
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const pendingTasks = tasks.filter((t) => t.status === "Pending").length;

  function handleEdit(task) {
    setEditTask(task);
  }

  function handleClearEdit() {
    setEditTask(null);
  }

  return (
    <div className="app-layout">
      <Header
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
      />

      <main className="main-content">
        <div className="main-grid">
          {/* Form - left side */}
          <div className="sidebar">
            <DataForm editTask={editTask} clearEdit={handleClearEdit} />
          </div>

          {/* Task list - right side */}
          <div className="content-area">
            {loading ? (
              <div className="loading-state">
                <div className="loader"></div>
                <p>Loading tasks from Firebase...</p>
              </div>
            ) : (
              <DataList tasks={tasks} onEdit={handleEdit} />
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built with React &amp; Firebase Firestore</p>
        <p className="footer-sub">React Firebase Data Manager - CRUD Project</p>
      </footer>
    </div>
  );
}

export default Home;
