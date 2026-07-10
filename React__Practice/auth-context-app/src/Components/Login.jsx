import React from 'react'
import useAuth from '../hooks/useAuth'
function Login() {
  const {login,logout} = useAuth()

  const userlogin = () => {
   const data = {
      name: "rohit shrma",
      email: "rohit@gmail.com"
    }
    login(data)
  }
  return (
    <div>
      <button onClick={userlogin}>
        login
      </button>

      <button onClick={() =>logout()}>Logout</button>
    </div>
  )
}

export default Login