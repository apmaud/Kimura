import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Navbar from './components/overlay/Navbar'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfoQuery } from './components/redux/auth/authService'
import ProtectedRoute from './components/routing/ProtectedRoute'
import BottomNav from './components/overlay/BottomNav'
import { ToastContainer, toast } from 'react-toastify'
import ToastBox from './components/overlay/ToastBox'

function App() {
  const { loading, userInfo, error, success, authenticated } = useSelector(
    (state) => state.auth
  )
  
  
  // const user = useSelector((state) => state.auth);
  // const dispatch = useDispatch()

  // const { data, isFetching } = useGetUserInfoQuery('userInfo', {
  //   pollingInterval: 900000,
  // })

  return ( 
    <div className='h-full flex-col'>

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />}/>
        </Route>
      </Routes>
      {authenticated && (
      <BottomNav />
      )}
      <ToastContainer />
    </div>
  )
}

export default App
