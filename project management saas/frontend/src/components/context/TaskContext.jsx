import axios from "axios";
import { useState, createContext, useEffect,  } from "react";

export const TaskContext = createContext()
export const TaskProvider = ({children})=>{

    const [tasks, setTasks] = useState(null)






    const getTasks = async()=>{
        const response = await axios.get("http://localhost:3000/projects/tasks/getalltasks/:id")
    }


    return(
        <TaskContext.Provider value={{tasks}}> 
            {children}
        </TaskContext.Provider>
    )
}