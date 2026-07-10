import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NAvbar from './Components/NAvbar'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NAvbar />
    <Dashboard />
    <Profile />
    </>
  )
}

export default App
