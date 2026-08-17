import React from 'react'
import { Outlet } from 'react-router-dom'
import Siderbar from '../components/layout/Siderbar'

const DashboardLayout = () => {
  return (
    <div>
        <Siderbar/>
        <main>
            <Outlet/>
        </main>


    </div>
  )
}

export default DashboardLayout