import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../../components/ui/Cards'
import useAuth from '../../components/hooks/useAuth'
import useProjects from '../../components/hooks/useProjects'
import { useEffect } from 'react'

const Dashboard = () => {
const {user} = useAuth()
const {projects, getProjects} = useProjects()
const recentProjects = [...(projects || [])]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 4)

  
  useEffect(() => {
          getProjects()}, []);

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
      <Cards title="Total projects"
      value={projects?.length || 0}/>
      <Cards title="Completed "
      value={projects?.filter(project => project.status === 'completed').length || 0}/>
      <Cards title="In Progress"
      value={projects?.filter(project => project.status === 'in-progress').length || 0}/>
      <Cards title="Pending"
      value={projects?.filter(project => project.status === 'pending').length || 0}/>
      <Cards title="Overdue"
      value={projects?.filter(project => project.status === 'overdue').length || 0}/>
      </div>

      {/* Bottom  */}
      <div className='w-[95%] h-[45%] flex justify-between '>
      
      {/* Recent projects */}
<div className='bg-[rgba(21,21,21,1)] w-[50%] h-[99%] rounded-4xl p-5 overflow-auto scrollbar-none'>

  <div className='flex justify-between items-center mb-5'>
    <h1 className='text-3xl'>Recent projects</h1>

    <NavLink
      to="/projects"
      className='text-sm text-gray-400 hover:text-white transition'
    >
      View all
    </NavLink>
  </div>

  <div className='flex flex-col gap-3'>

    {recentProjects.map((project) => (
      <NavLink
        key={project._id}
        to={`/projects/${project._id}`}
        className='w-full bg-[rgba(37,37,37,1)] rounded-xl px-5 py-4
                   flex items-center justify-between
                   hover:bg-[rgba(45,45,45,1)] transition-all duration-200'
      >

        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-medium'>
            {project.name}
          </h2>

          <p className='text-sm text-gray-400'>
            {project.description}
          </p>
        </div>

        <span className='text-sm text-gray-400'>
          {project.status}
        </span>

      </NavLink>
    ))}

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