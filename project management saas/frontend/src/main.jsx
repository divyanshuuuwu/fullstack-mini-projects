import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './Routes/AppRouter'
import { AuthProvider } from './components/context/authContext'
import { ProjectProvider } from './components/context/ProjectContext'
import { TaskProvider } from './components/context/TaskContext'                 

createRoot(document.getElementById('root')).render(
  <AuthProvider>
 <ProjectProvider> 
  <TaskProvider>
    <RouterProvider router = {AppRouter}/>
  </TaskProvider>
 </ProjectProvider>
 </AuthProvider>
)

