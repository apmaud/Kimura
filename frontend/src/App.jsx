import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Navbar from './components/overlay/Navbar'

function App() {

  return (
    <div className='h-full min-h-full'>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AuthPage />
            </>
          } 
        />
      </Routes>
    </div>
  )
}

export default App
