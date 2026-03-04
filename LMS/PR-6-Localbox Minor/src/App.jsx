import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState(() => {
    try {
      const stored = localStorage.getItem('students');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed === '' || email.trim() === '' || mobile.trim() === '' || gender === '') {
      return;
    }

    const studentRecord = { name: trimmed, email: email.trim(), mobile: mobile.trim(), gender };

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = studentRecord;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, studentRecord]);
    }
    setName('');
    setEmail('');
    setMobile('');
    setGender('');
  };

  const handleEdit = (index) => {
    const st = students[index];
    setName(st.name);
    setEmail(st.email);
    setMobile(st.mobile);
    setGender(st.gender);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
    if (index === editIndex) {
      setEditIndex(null);
      setName('');
    }
  };

  return (
    <div>
      <header className="page-header">
        <h1>Student CRUD (localStorage)</h1>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-row">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>

        {students.length === 0 ? (
          <p className="text-center" style={{ padding: '1rem 0' }}>
            No students added yet.
          </p>
        ) : (
          <ul className="student-list">
            {students.map((student, index) => (
              <li key={index} className="student-item grid">
                <span className="student-name" style={{ flex: 2 }}>
                  {student.name}
                </span>
                <span style={{ flex: 3 }}>{student.email}</span>
                <span style={{ flex: 2 }}>{student.mobile}</span>
                <span style={{ flex: 1 }}>{student.gender}</span>
                <div className="actions" style={{ flex: 1 }}>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
