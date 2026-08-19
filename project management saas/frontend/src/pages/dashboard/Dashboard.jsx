import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../../components/ui/Cards'
import useAuth from '../../components/hooks/useAuth'
import useProjects from '../../components/hooks/useProjects'

const Dashboard = () => {
const {user} = useAuth()
const {projects} = useProjects()


  return (
    //main screen
    <div className=' w-full h-screen flex  justify-center p-8'>
      {/* main container */}
      <div className=' w-[95%] h-[90%] flex flex-col items-center  '>


      {/* top */}
      <div className=' w-[95%] min-h-25 flex justify-between p-5 items-center'>
        {/* heading */}
        <div>
          <h1 className='text-4xl'>Good morning, {user?.name}</h1>
          <h3>Here's whats's happening across your projects.</h3>
        </div>
        {/* create project btn */}
                  <NavLink
                  to="/projects/create"
                  className="bg-white text-black px-5 py-3 rounded-xl font-medium
                   hover:bg-[#d54444] transition-all duration-200 shadow-sm"
                  >
                  + Create project
                </NavLink>
      </div>

      {/* middle cards*/}
      <div className=' w-[95%] h-[35%] flex items-center gap-6 '>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>

      {/* Bottom  */}
      <div className='w-[95%] h-[45%] flex justify-between '>
      {/* Recent projects */}
      <div className=' bg-[rgba(21,21,21,1)] w-[50%] h-[99%] rounded-4xl'>
      <h1 className=' p-4 text-3xl'>Recent projects</h1>
      <div className=' w-[80%]  px-8 text-xl flex flex-col gap-4  '>
        <h1 className='w-[70%]  bg-[rgba(37,37,37,1)] flex justify-center rounded-xl'>Website Redesign</h1>
        <h1 className='w-[70%] bg-[rgba(37,37,37,1)] flex justify-center rounded-xl'>Website Redesign</h1>
        <h1 className='w-[70%] bg-[rgba(37,37,37,1)] flex justify-center rounded-xl'>Website Redesign</h1>
        <h1 className='w-[70%] bg-[rgba(37,37,37,1)] flex justify-center rounded-xl'>Website Redesign</h1>
      </div>
      </div>



      {/* My tasks */}
      <div className='bg-[rgba(21,21,21,1)] w-[45%] h-[99%] rounded-4xl'>
      <h1 className=' p-4 text-3xl'>My tasks</h1>
      <div className='w-[80%] px-8 text-2xl flex flex-col gap-2 '>
        <h1>• fix auth token</h1>
        <h1>• fix auth token</h1>
        <h1>• fix auth token</h1>
      </div>
      </div>


      </div>



      </div>

    </div>
  )
}

export default Dashboard