import React from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen min-w-screen bg-base-100 rounded-md shadow-lg">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Kimura</h1>
          <p className="py-6">A jiu-jitsu web application, centralizing your techniques in one place. Sign up to start organizing your game.</p>
          <button className="btn btn-primary" onClick={() => navigate('/auth')}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage