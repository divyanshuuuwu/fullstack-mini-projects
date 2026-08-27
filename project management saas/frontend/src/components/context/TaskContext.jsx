import axios from "axios";
import { useState, createContext,   } from "react";

export const TaskContext = createContext()
export const TaskProvider = ({children})=>{

const [tasks, setTasks] = useState([])
const [taskbyId, setTaskById] = useState([])

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

    const getTaskById = async(id)=>{
        try{
            const response = await axios.get(`http://localhost:3000/projects/tasks/getalltasks/${id}`, {
                withCredentials: true
            })
            setTaskById(response.data.tasks)
            console.log(response.data)

        }catch(err){
            console.log(err.response.data)
        }
    }


    return(
        <TaskContext.Provider value={{tasks, taskbyId, getMytasks, getTaskById}}>
            {children}
        </TaskContext.Provider>
    )
}



