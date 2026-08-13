import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/Product.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/product/:id",
    element: <Product />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
