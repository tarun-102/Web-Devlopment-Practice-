import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.tsx';
import router from './routes/Router.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
       <ToastContainer />
    </AuthProvider>

  </StrictMode>,
)
