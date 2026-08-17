import React from 'react'
import { Outlet } from 'react-router-dom'
import Siderbar from '../components/layout/Siderbar'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
        <Siderbar/>
        <main className="flex-1 bg-[rgba(11,11,11,1)] text-amber-50">
            <Outlet/>
        </main>


    </div>
  )
}

export default DashboardLayout