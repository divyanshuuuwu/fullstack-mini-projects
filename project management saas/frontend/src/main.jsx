import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './Routes/AppRouter'
import { AuthProvider } from './components/context/authContext'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
 <RouterProvider router = {AppRouter}/>
 </AuthProvider>
)

