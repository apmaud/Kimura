import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const AuthPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="hero min-h-screen min-w-full bg-base-100 rounded-md shadow-lg">
      <div className="hero-content text-center">
        {loading ? (
          <>
            <span className="loading loading-ring loading-lg"></span>
          </>
        ) : (
          <>
            <div role="tablist" className="tabs tabs-lifted flex-col">
              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Login" defaultChecked/>
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <Login 
                loading={loading}
                setLoading={setLoading} 
                />
              </div>
              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Register" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <Register
                loading={loading}
                setLoading={setLoading} 
                />
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default AuthPage