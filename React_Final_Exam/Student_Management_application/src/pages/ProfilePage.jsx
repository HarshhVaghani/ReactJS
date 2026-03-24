import { useSelector } from 'react-redux'

function ProfilePage() {
  const { user } = useSelector((state) => state.auth)
  const { items: students } = useSelector((state) => state.students)

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 h-60 w-60 rounded-full bg-red-100/50 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 h-60 w-60 rounded-full bg-red-200/50 blur-3xl"></div>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-red-lg">
          <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur text-3xl font-bold text-white shadow-lg">
                {user?.username?.charAt(0).toUpperCase() || 'A'}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{user?.username}</h1>
                <p className="text-sm text-white/80 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Account Information</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-red-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Username</p>
                    <p className="font-medium text-slate-800">{user?.username}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-red-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-200">
                    <svg className="h-5 w-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Role</p>
                    <p className="font-medium text-slate-800 capitalize">{user?.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-red-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Access Level</p>
                    <p className="font-medium text-slate-800">Full Student Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-red-lg">
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Quick Stats</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-red-400 to-red-500 p-5 text-white shadow-md">
                <div className="text-3xl font-bold">{students.length}</div>
                <div className="text-sm text-white/80">Total Students</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-red-400 to-red-500 p-5 text-white shadow-md">
                <div className="text-3xl font-bold">
                  {new Set(students.map((s) => s.courseName).filter(Boolean)).size}
                </div>
                <div className="text-sm text-white/80">Courses</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-5 text-white shadow-md">
                <div className="text-3xl font-bold">
                  {new Set(students.map((s) => s.rollNumber).filter(Boolean)).size}
                </div>
                <div className="text-sm text-white/80">Enrollments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
