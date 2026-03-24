import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteStudent, updateStudent } from '../features/students/studentSlice'

function StudentDetails({ student }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: student.name || '',
    rollNumber: student.rollNumber || '',
    courseName: student.courseName || '',
    mobileNumber: student.mobileNumber || '',
    email: student.email || '',
  })

  useEffect(() => {
    setFormData({
      name: student.name || '',
      rollNumber: student.rollNumber || '',
      courseName: student.courseName || '',
      mobileNumber: student.mobileNumber || '',
      email: student.email || '',
    })
  }, [student])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    if (!formData.name.trim() || !String(formData.rollNumber).trim()) {
      setError('Name and roll number are required.')
      return
    }

    setError('')
    setIsSaving(true)

    const updatedData = {
      ...student,
      name: formData.name.trim(),
      rollNumber: Number(formData.rollNumber),
      courseName: formData.courseName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim(),
    }

    try {
      await dispatch(updateStudent({ id: student.id, updatedData })).unwrap()
      setIsEditing(false)
    } catch (saveError) {
      setError(saveError || 'Failed to save changes.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      await dispatch(deleteStudent(student.id))
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setError('')
    setFormData({
      name: student.name || '',
      rollNumber: student.rollNumber || '',
      courseName: student.courseName || '',
      mobileNumber: student.mobileNumber || '',
      email: student.email || '',
    })
  }

  return (
    <article className="rounded-2xl border border-velvet-100 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:shadow-velvet card-hover">
      {isEditing ? (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-500">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-800 focus:border-velvet-500 focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500">Roll Number</label>
              <input
                name="rollNumber"
                type="number"
                value={formData.rollNumber}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-800 focus:border-velvet-500 focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Roll No"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-500">Course Name</label>
              <input
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-800 focus:border-velvet-500 focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Course"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-500">Mobile Number</label>
              <input
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-800 focus:border-velvet-500 focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Mobile"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-800 focus:border-velvet-500 focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Email"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
              {error}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-sm font-bold text-white  shadow-lg">
              {student.name?.charAt(0).toUpperCase() || 'S'}
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{student.name}</h3>
              <p className="text-xs text-slate-500">Roll No: {student.rollNumber}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-velvet-100 px-3 py-1 text-xs font-medium text-velvet-700">
              {student.courseName || 'No Course'}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 border-t border-velvet-100 pt-3 text-sm">
            {student.mobileNumber && (
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="h-4 w-4 text-velvet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {student.mobileNumber}
              </div>
            )}
            {student.email && (
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="h-4 w-4 text-velvet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate max-w-[150px]">{student.email}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2 border-t border-velvet-100 pt-4">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-1.5 rounded-lg bg-velvet-500 px-4 py-2 text-sm font-medium text-red transition hover:bg-velvet-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-1.5 rounded-lg bg-bone-100 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-velvet-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1.5 rounded-lg bg-velvet-100 px-4 py-2 text-sm font-medium text-velvet-700 transition hover:bg-velvet-200"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </button>
        )}

        <button
          type="button"
          onClick={handleDelete}
          className="flex items-center gap-1.5 rounded-lg bg-rose-100 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-200"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </article>
  )
}

export default StudentDetails
