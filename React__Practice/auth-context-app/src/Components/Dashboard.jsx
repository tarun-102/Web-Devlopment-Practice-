import React from 'react'
import useAuth from '../hooks/useAuth'
function Dashboard() {
  const {user,isLogin} = useAuth();
  return  isLogin ? <div>welcom {user.name}</div> : <div>No user detail</     div>
}

export default Dashboard