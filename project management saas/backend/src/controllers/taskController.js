const taskModel = require("../models/taskModel")
const projectModel = require("../models/projectModel")

const createTask = async(req , res)=>{
    const {title, description, project, assignedTo, status, priority} = req.body
    const projectId = req.params.id;
  
    try{
        const projectExists = await projectModel.findOne({_id: projectId, user: req.user.id})
        if(!projectExists){
            return res.status(404).json({message: "Project not found or you don't have permission to add tasks to this project"})
        }

        const newTask = await taskModel.create({
            title,
            description,
            project: projectId,
            assignedTo,
            status,
            priority
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
        const project = await projectModel.findOne({_id: projectId, user: userId})
        if(!project){
            return res.status(404).json({message: "Project not found or you don't have permission to view tasks for this project"})
        }
        const tasks = await taskModel.find({project: projectId})
        res.status(200).json({message: "Tasks retrieved successfully", tasks})

    }catch(err){
        res.status(500).json({message: "error retrieving tasks", error: err.message})
    }

}











module.exports = {createTask, getTasks}

