import React from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const AuthPage = () => {
  return (
    <div className="hero min-h-full p-5">
      <div role="tablist" className="tabs tabs-lifted flex-col">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Login" defaultChecked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <Login />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Register" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <Register />
        </div>

      </div>
    </div>
  )
}

export default AuthPage