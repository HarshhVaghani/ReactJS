import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../features/students/studentSlice'

function StudentForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error: serverError } = useSelector((state) => state.students)

  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    courseName: '',
    mobileNumber: '',
    email: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name || !formData.rollNumber) {
      setError('Please fill in all required fields.')
      return
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (formData.mobileNumber && !/^[0-9]{10}$/.test(formData.mobileNumber.replace(/[\s-]/g, ''))) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    setError('')
    setSubmitting(true)

    const resultAction = await dispatch(
      addStudent({
        id: Date.now().toString(),
        name: formData.name.trim(),
        rollNumber: Number(formData.rollNumber),
        courseName: formData.courseName.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        email: formData.email.trim(),
      }),
    )

    setSubmitting(false)

    if (addStudent.fulfilled.match(resultAction)) {
      navigate('/students')
      return
    }

    setError(resultAction.payload || 'Could not add student. Check if JSON server is running.')
  }

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 h-60 w-60 rounded-full bg-velvet-100/50 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 h-60 w-60 rounded-full bg-bone-200/50 blur-3xl"></div>
      </div>

      <div className="rounded-2xl border border-velvet-100 bg-white/90 p-6 shadow-velvet-lg sm:p-8">
        <div className="mb-6 border-b border-velvet-100 pb-4">
          <h1 className="text-3xl font-bold gradient-text">
            Add New Student
          </h1>
          <p className="mt-1 text-sm text-slate-500">Fill in the student details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Name <span className="text-velvet-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm text-slate-800 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Enter student name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Roll Number <span className="text-velvet-500">*</span>
              </label>
              <input
                type="number"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm text-slate-800 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="Enter roll number"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm text-slate-800 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="e.g., Computer Science"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm text-slate-800 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm text-slate-800 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
                placeholder="student@email.com"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-sm text-rose-600">
              {error}
            </div>
          )}
          {!error && serverError && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-sm text-rose-600">
              {serverError}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-xl btn-primary px-4 py-3 text-sm font-semibold shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Adding Student...
                </span>
              ) : (
                'Add Student'
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/students')}
              className="rounded-xl border border-velvet-200 bg-bone-50 px-4 py-3 text-sm font-semibold text-velvet-700 transition hover:bg-velvet-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default StudentForm
