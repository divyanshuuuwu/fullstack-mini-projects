import axios from "axios";
import { useState, createContext,   } from "react";

export const TaskContext = createContext()
export const TaskProvider = ({children})=>{

const [tasks, setTasks] = useState([])
const [taskbyId, setTaskById] = useState([])
  const [showAddTaskCard, setShowAddTaskCard] = useState(false);

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

    const createTask = async(title, description, email, status, priority, id)=>{
        try{
            const response = await axios.post(`http://localhost:3000/projects/tasks/create/{id}`, {
                title,
                description,
                email,
                status,
                priority
            }, {
                withCredentials: true
            })
            console.log(response.data)
            setShowAddTaskCard(false)
        }catch(err){
            console.log(err.response.data)
        }
    }


    return(
        <TaskContext.Provider value={{tasks, taskbyId, getMytasks, getTaskById, showAddTaskCard, setShowAddTaskCard}}>
            {children}
        </TaskContext.Provider>
    )
}



