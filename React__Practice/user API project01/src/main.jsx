import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import UserDetails from './pages/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/user/:userId",
    element: <UserDetails />
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
