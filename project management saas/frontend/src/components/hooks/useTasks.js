import { useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const useTask = ()=>{
    return useEffect(TaskContext)
}

export default useTask