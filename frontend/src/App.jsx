import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Navbar from './components/overlay/Navbar'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className='h-full min-h-screen min-w-screen flex-col'>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage />
          }
        />
      </Routes>
    </div>
  )
}

export default App
