import React from 'react'
import Login from '../components/auth/Login'

const AuthPage = () => {
  return (
    <div className="hero min-h-full p-10">
      <label className="swap swap-flip text-9xl">
        
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        
        <div className="swap-on">Register</div>

        <div className="swap-off">Login</div>
      </label>
  
    </div>
  )
}

export default AuthPage