import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()
export const ProjectProvider =({children}) => {



const [projects, setProjects] = useState(null)



const getProjects = async()=>{
    try{
        const response = await axios.get("http://localhost:3000/projects/get", {
                withCredentials: true
            })
            setProjects(response.data.projects)
        console.log(response.data)

    }catch(err){
        console.log(err.response.data)
    }
}






return(
 <ProjectContext.Provider value={{projects, setProjects, getProjects}}>
    {children}
 </ProjectContext.Provider>


)


}

    