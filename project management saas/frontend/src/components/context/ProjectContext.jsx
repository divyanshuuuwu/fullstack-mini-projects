import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()
export const ProjectProvider =({children}) => {



const [projects, setProjects] = useState([])
const [projectbyId, setProjectById] = useState({})


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

const getProjectById = async(id)=>{
    try{
        const response = await axios.get(`http://localhost:3000/projects/get/${id}`, {
                withCredentials: true
            })
            setProjectById(response.data.project)
        console.log(response.data)

    }catch(err){
        console.log(err.response.data)
    }

}



return(
 <ProjectContext.Provider value={{projects, projectbyId, getProjects, getProjectById}}>
    {children}
 </ProjectContext.Provider>


)


}

    