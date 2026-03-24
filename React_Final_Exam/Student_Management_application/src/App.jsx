import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-gradient-to-br from-bone-50 via-velvet-50/20 to-bone-100">
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/students"
            element={
              <PrivateRoute>
                <StudentList />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-student"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <Navigate
                to={isAuthenticated ? '/students' : '/login'}
                replace
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-velvet-100 bg-white/50 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-slate-500">
          Student Management System © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
