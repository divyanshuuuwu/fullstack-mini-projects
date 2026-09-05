const taskModel = require("../models/taskModel");
const projectModel = require("../models/projectModel");
const userModel = require("../models/userModel");


// ==========================================
// CREATE TASK
// ==========================================

const createTask = async (req, res) => {
    const {
        title,
        description,
        email,
        status,
        priority,
        dueDate
    } = req.body;

    const projectId = req.params.id;
    const userId = req.user.id;

    try {
        // Only project owner can create a task
        const project = await projectModel.findOne({
            _id: projectId,
            owner: userId
        });

        if (!project) {
            return res.status(403).json({
                message:
                    "You don't have permission to create tasks in this project"
            });
        }

        // Find assigned user
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User with this email not found"
            });
        }

        // Check if assigned user is a project member
        const isMember = project.members.some(
            (member) =>
                member.toString() === user._id.toString()
        );

        if (!isMember) {
            return res.status(400).json({
                message:
                    "This user is not a member of this project"
            });
        }

        const newTask = await taskModel.create({
            title,
            description,
            project: projectId,
            assignedTo: user._id,
            status: status || "to-do",
            priority,
            dueDate
        });

        const task = await taskModel
            .findById(newTask._id)
            .populate("assignedTo", "name email")
            .populate("project", "name");

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (err) {
        console.log("CREATE TASK ERROR:", err);

        res.status(500).json({
            message: "Error creating task",
            error: err.message
        });
    }
};


// ==========================================
// GET ALL TASKS OF A PROJECT
// OWNER + MEMBERS
// ==========================================

const getTasks = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try {
        console.log("========== GET PROJECT TASKS ==========");
        console.log("Project ID:", projectId);
        console.log("Logged in User ID:", userId);

        // Check whether user belongs to project
        const project = await projectModel.findOne({
            _id: projectId,
            members: userId
        });

        console.log("Project found:", project);

        if (!project) {
            return res.status(403).json({
                message:
                    "You are not a member of this project"
            });
        }

        // Get all tasks belonging to this project
        const tasks = await taskModel
            .find({
                project: projectId
            })
            .populate("assignedTo", "name email")
            .populate("project", "name");

        console.log("Tasks found:", tasks);

        res.status(200).json({
            message: "Tasks retrieved successfully",
            tasks
        });

    } catch (err) {
        console.log("GET PROJECT TASKS ERROR:", err);

        res.status(500).json({
            message: "Error retrieving tasks",
            error: err.message
        });
    }
};


// ==========================================
// GET ONE TASK
// OWNER + PROJECT MEMBERS
// ==========================================

const getTaskById = async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user.id;

    try {
        console.log("========== GET TASK ==========");
        console.log("Task ID:", taskId);
        console.log("User ID:", userId);

        const task = await taskModel
            .findById(taskId)
            .populate("assignedTo", "name email")
            .populate("project", "name");

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        // Check whether logged-in user belongs to task's project
        const project = await projectModel.findOne({
            _id: task.project._id,
            members: userId
        });

        if (!project) {
            return res.status(403).json({
                message:
                    "You don't have permission to view this task"
            });
        }

        res.status(200).json({
            message: "Task retrieved successfully",
            task
        });

    } catch (err) {
        console.log("GET TASK ERROR:", err);

        res.status(500).json({
            message: "Error retrieving task",
            error: err.message
        });
    }
};


// ==========================================
// GET MY TASKS
// ==========================================

const getMyTasks = async (req, res) => {
    const userId = req.user.id;

    try {

        const tasks = await taskModel
            .find({
                assignedTo: userId
            })
            .populate("assignedTo", "name email")
            .populate("project", "name");

      

        res.status(200).json({
            message: "Tasks retrieved successfully",
            tasks
        });

    } catch (err) {
        console.log("GET MY TASKS ERROR:", err);

        res.status(500).json({
            message: "Error retrieving tasks",
            error: err.message
        });
    }
};


// ==========================================
// UPDATE TASK
// ONLY ASSIGNED USER
// ==========================================

const updateTask = async (req, res) => {
    const { status } = req.body;

    const taskId = req.params.taskId;
    const userId = req.user.id;

    try {
        const task = await taskModel.findOne({
            _id: taskId,
            assignedTo: userId
        });

        if (!task) {
            return res.status(403).json({
                message:
                    "You don't have permission to update this task"
            });
        }

        const updatedTask = await taskModel
            .findByIdAndUpdate(
                taskId,
                {
                    status
                },
                {
                    new: true
                }
            )
            .populate("assignedTo", "name email")
            .populate("project", "name");

        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });

    } catch (err) {
        console.log("UPDATE TASK ERROR:", err);

        res.status(500).json({
            message: "Error updating task",
            error: err.message
        });
    }
};


module.exports = {
    createTask,
    getTasks,
    getTaskById,
    getMyTasks,
    updateTask
};
