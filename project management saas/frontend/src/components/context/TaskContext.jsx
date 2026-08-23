import axios from "axios";
import { useState, createContext,   } from "react";

export const TaskContext = createContext()
export const TaskProvider = ({children})=>{

    const [tasks, setTasks] = useState(null)


    const getMytasks = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/projects/tasks/mytasks", {
                withCredentials: true
            })
            setTasks(response.data.tasks)
            console.log(response.data)
            console.log(tasks)
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }


    return(
        <TaskContext.Provider value={{tasks, setTasks, getMytasks}}> 
            {children}
        </TaskContext.Provider>
    )
}



