import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStudents } from '../features/students/studentSlice'
import StudentDetails from './StudentDetails'

function StudentList() {
  const dispatch = useDispatch()
  const { items: students, loading, error } = useSelector((state) => state.students)

  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [filterCourse, setFilterCourse] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  const courseOptions = useMemo(() => {
    const values = students.map((student) => student.courseName).filter(Boolean)
    return ['all', ...new Set(values)]
  }, [students])

  const visibleStudents = useMemo(() => {
    let filtered = students

    if (filterCourse !== 'all') {
      filtered = filtered.filter((student) => student.courseName === filterCourse)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (student) =>
          student.name?.toLowerCase().includes(query) ||
          String(student.rollNumber).includes(query) ||
          student.email?.toLowerCase().includes(query) ||
          student.mobileNumber?.includes(query)
      )
    }

    return [...filtered].sort((a, b) => {
      let comparison = 0
      if (sortBy === 'rollNumber') {
        comparison = Number(a.rollNumber) - Number(b.rollNumber)
      } else if (sortBy === 'name') {
        comparison = (a.name || '').localeCompare(b.name || '')
      }
      return sortOrder === 'asc' ? comparison : -comparison
    })
  }, [students, sortBy, sortOrder, filterCourse, searchQuery])

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 h-60 w-60 rounded-full bg-velvet-100/50 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 h-60 w-60 rounded-full bg-bone-200/50 blur-3xl"></div>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Students</h1>
          <p className="mt-1 text-sm text-slate-500">
            {loading ? 'Loading...' : `${visibleStudents.length} of ${students.length} students`}
          </p>
        </div>
        <Link
          to="/add-student"
          className="flex items-center gap-2 rounded-xl btn-primary px-5 py-2.5 text-sm font-semibold shadow-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Student
        </Link>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-velvet-100 bg-white/80 p-5 shadow-sm">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-velvet-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, roll number, email or mobile..."
            className="w-full rounded-xl border border-velvet-200 bg-bone-50 py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 transition focus:border-velvet-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-velvet-500/20"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Sort By</label>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-700 focus:border-velvet-500 focus:outline-none"
              >
                <option value="name">Name</option>
                <option value="rollNumber">Roll Number</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-1 rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-600 transition hover:bg-velvet-50 hover:border-velvet-300"
                title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              >
                {sortOrder === 'asc' ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Filter by Course</label>
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="w-full rounded-lg border border-velvet-200 bg-bone-50 px-3 py-2 text-sm text-slate-700 focus:border-velvet-500 focus:outline-none"
            >
              {courseOptions.map((courseValue) => (
                <option key={courseValue} value={courseValue}>
                  {courseValue === 'all' ? 'All Courses' : courseValue}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchQuery('')
                setFilterCourse('all')
                setSortBy('name')
                setSortOrder('asc')
              }}
              className="w-full rounded-lg border border-velvet-200 bg-bone-50 px-4 py-2 text-sm font-medium text-velvet-600 transition hover:bg-velvet-50"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center rounded-2xl border border-velvet-100 bg-white/80 p-10">
          <div className="flex items-center gap-3 text-velvet-500">
            <svg className="h-6 w-6 animate-spin spinner-velvet rounded-full" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="font-medium">Loading students...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-600">
          {error}
        </div>
      )}

      {!loading && visibleStudents.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-velvet-200 bg-white/80 p-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-velvet-50 mb-4">
            <svg className="h-10 w-10 text-velvet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-700">No students found</h3>
          <p className="mt-1 text-sm text-slate-500">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStudents.map((student) => (
          <StudentDetails key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default StudentList
