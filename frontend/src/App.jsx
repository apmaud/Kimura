import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Navbar from './components/overlay/Navbar'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <div className='h-full flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
