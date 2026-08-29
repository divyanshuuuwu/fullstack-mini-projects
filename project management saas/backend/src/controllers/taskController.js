const taskModel = require("../models/taskModel")
const projectModel = require("../models/projectModel")
const userModel = require("../models/userModel")

const createTask = async(req , res)=>{
    const {title, description, email, status, priority, dueDate} = req.body
    const projectId = req.params.id;
  
    try{
        const projectExists = await projectModel.findOne({_id: projectId, owner: req.user.id})
        if(!projectExists){
            return res.status(404).json({message: "Project not found or you don't have permission to add tasks to this project"})
        }

        

         const user = await userModel.findOne({ email });
            if (!user) {
            return res.status(400).json({ message: "email not found" });
            }

            // Make sure the user is a member of this project
        const memberExists = projectExists.members.some(
            member => member.toString() === user._id.toString()
        );

        if (!memberExists) {
            return res.status(400).json({
                message: "This user is not a member of the project"
            });
        }
            

        const newTask = await taskModel.create({
            title,
            description,
            project: projectId,
            assignedTo:user,
            status,
            priority,
            dueDate
        })
        res.status(201).json({message: "Task created successfully", task: newTask})


    }catch(err){
        console.log(err)
        res.status(500).json({message: "error creating task", error: err.message})

    }

}



const getTasks = async(req, res)=>{
    const projectId = req.params.id;
    const userId = req.user.id;
     

    try{
        const project = await projectModel.findOne({_id: projectId, owner: userId})
        if(!project){
            return res.status(404).json({message: "Project not found or you don't have permission to view tasks for this project"})
        }
        const tasks = await taskModel.find({project: projectId}).populate("assignedTo", "name email")
        res.status(200).json({message: "Tasks retrieved successfully", tasks})

    }catch(err){
        res.status(500).json({message: "error retrieving tasks", error: err.message})
    }

}



const getTaskById = async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user.id;

    try {
        const task = await taskModel
            .findById(taskId)
            .populate("assignedTo", "name email");

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        const project = await projectModel.findOne({
            _id: task.project,
            members: userId
        });

        if (!project) {
            return res.status(403).json({
                message: "You don't have permission to view this task"
            });
        }

        res.status(200).json({
            message: "Task retrieved successfully",
            task
        });

    } catch (err) {
        res.status(500).json({
            message: "Error retrieving task",
            error: err.message
        });
    }
};



const getMyTasks = async (req, res) => {
    const userId = req.user.id;

    try {
        const tasks = await taskModel.find({
            assignedTo: userId
        }).populate("project", "name")

        res.status(200).json({
            message: "Tasks retrieved successfully",
            tasks
        });

    } catch (err) {
        res.status(500).json({
            message: "Error retrieving tasks",
            error: err.message
        });
    }
};

const updateTask = async(req, res)=>{
    const { status} = req.body
    const taskId = req.params.taskId;
    const userId = req.user.id;
    try{
        const task = await taskModel.findOne({_id: taskId, assignedTo: userId})
        if(!task){
            return res.status(404).json({message: "Task not found or you don't have permission to view this task"})
        }
        const updatedTask = await taskModel.findOneAndUpdate({_id: taskId}, { status},{ new: true })
        res.status(200).json({message: "Task updated successfully", task: updatedTask})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "error updating task", error: err.message})
    }
}   



module.exports = {createTask, getTasks, getTaskById, getMyTasks, updateTask}
