import React from 'react'
import useAuth from '../hooks/useAuth'
function Profile() {
  const {isLogin,user} = useAuth()
  return isLogin ? <div> {user.email} </div> : <div>please login</div>
}

export default Profile