import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login/Login.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  { path: "/", element: <Login />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
