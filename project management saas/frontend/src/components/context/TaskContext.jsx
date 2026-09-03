import axios from "axios";
import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [taskbyId, setTaskById] = useState(null);
    const [showAddTaskCard, setShowAddTaskCard] = useState(false);

    // GET ALL TASKS OF A PROJECT
    const getTasksByProject = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/tasks/getalltasks/${id}`,
                {
                    withCredentials: true,
                }
            );

            console.log("PROJECT TASKS:", response.data.tasks);

            setTasks(
                Array.isArray(response.data.tasks)
                    ? response.data.tasks
                    : []
            );
        } catch (error) {
            console.error(
                "Error fetching project tasks:",
                error.response?.data || error.message
            );

            setTasks([]);
        }
    };

    // GET MY TASKS
    const getMytasks = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/tasks/mytasks",
                {
                    withCredentials: true,
                }
            );

           

            setTasks(
                Array.isArray(response.data.tasks)
                    ? response.data.tasks
                    : []
            );
        } catch (error) {
            console.error(
                "Error fetching my tasks:",
                error.response?.data || error.message
            );

            setTasks([]);
        }
    };

    // GET ONE TASK
    const getTaskById = async (taskId) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/tasks/gettask/${taskId}`,
                {
                    withCredentials: true,
                }
            );

            setTaskById(response.data.task);

            return response.data.task;
        } catch (error) {
            console.error(
                "Error fetching task:",
                error.response?.data || error.message
            );

            return null;
        }
    };

    // CREATE TASK
    const createTask = async (
        title,
        description,
        email,
        priority,
        projectId,
        dueDate
    ) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/tasks/create/${projectId}`,
                {
                    title,
                    description,
                    email,
                    status: "to-do",
                    priority,
                    dueDate,
                },
                {
                    withCredentials: true,
                }
            );

            console.log("TASK CREATED:", response.data);

            setShowAddTaskCard(false);

            // Refresh project tasks after creating a task
            await getTasksByProject(projectId);
        } catch (error) {
            console.error(
                "Error creating task:",
                error.response?.data || error.message
            );
        }
    };

    // UPDATE TASK
    const updateTask = async (taskId, status) => {
        try {
            const response = await axios.patch(
                `http://localhost:3000/tasks/update/${taskId}`,
                {
                    status,
                },
                {
                    withCredentials: true,
                }
            );

            console.log("TASK UPDATED:", response.data);

            return response.data.task;
        } catch (error) {
            console.error(
                "Error updating task:",
                error.response?.data || error.message
            );

            return null;
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                taskbyId,
                getTasksByProject,
                getMytasks,
                getTaskById,
                showAddTaskCard,
                setShowAddTaskCard,
                createTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};