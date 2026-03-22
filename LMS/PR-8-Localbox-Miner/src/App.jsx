import { useEffect, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'students'

function App() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    try {
      const storedStudents = localStorage.getItem(STORAGE_KEY)
      if (storedStudents) {
        setStudents(JSON.parse(storedStudents))
      }
    } catch {
      setStudents([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
  }, [students])

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = name.trim()
    if (!trimmedName) return

    if (editIndex !== null) {
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? trimmedName : student,
      )
      setStudents(updatedStudents)
      setEditIndex(null)
    } else {
      setStudents([...students, trimmedName])
    }

    setName('')
  }

  const handleEdit = (index) => {
    setName(students[index])
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, itemIndex) => itemIndex !== index)
    setStudents(filteredStudents)

    if (editIndex === index) {
      setName('')
      setEditIndex(null)
    }

    if (editIndex !== null && index < editIndex) {
      setEditIndex((previousIndex) => previousIndex - 1)
    }
  }

  const handleCancelEdit = () => {
    setName('')
    setEditIndex(null)
  }

  return (
    <main className="app">
      <h1>Student CRUD with Local Storage</h1>
      <p className="subtitle">
        Create, Read, Update, and Delete student names. Data is saved in browser
        local storage.
      </p>

      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && (
          <button type="button" className="secondary" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <section className="students-card">
        <h2>Student List</h2>

        {students.length === 0 ? (
          <p className="empty">No students added yet.</p>
        ) : (
          <ul className="students-list">
            {students.map((student, index) => (
              <li key={`${student}-${index}`}>
                <span>
                  {index + 1}. {student}
                </span>
                <div className="actions">
                  <button type="button" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
