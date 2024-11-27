import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Navbar from './components/overlay/Navbar'
import LandingPage from './pages/LandingPage'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfoQuery } from './components/redux/auth/authService'
import ProtectedRoute from './components/routing/ProtectedRoute'
import BottomNav from './components/overlay/BottomNav'
import { ToastContainer, toast } from 'react-toastify'
import { AlertsWrapper } from './components/overlay/Alert'
import WebPage from './pages/WebPage'
import FlowPage from './pages/FlowPage'
import HomePage from './pages/HomePage'

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
          <Route path="/home" element={<HomePage />}/>
          <Route path="/web" element={<WebPage />}/>
          <Route path="/flow" element={<FlowPage />}/>
        </Route>
      </Routes>
      {authenticated && (
      <BottomNav />
      )}
      <AlertsWrapper />
    </div>
  )
}

export default App
