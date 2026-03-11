import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login/Login.jsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
