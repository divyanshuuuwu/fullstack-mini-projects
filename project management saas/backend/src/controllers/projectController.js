const projectModel = require("../models/projectModel");


const createProject = async (req, res) => {
    const { name, description, status, priority, members } = req.body;
    const userId = req.user.id; // Assuming the user ID is stored in req.user after authentication
    try{
        const newProject = await projectModel.create({
            name,
            description,
            owner: userId,
            status: "pending",
            priority, // Default priority when creating a new project
            members: [userId, ...members] // Include members when creating a new project
        });
        res.status(201).json({ message: "Project created successfully", project: newProject });
    }catch(err){
        res.status(500).json({ message: "error creating project", error: err.message });
    }

}

const getProjects = async (req, res) => {
    const userId = req.user.id;

    try{
        const projects = await projectModel.find({ owner: userId });
        res.status(200).json({ message: "Projects retrieved successfully", projects });
    }catch(err){
        res.status(500).json({ message: "error retrieving projects", error: err.message });
    }
}

const getProjectById = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try{
        const project = await projectModel.findOne({ _id: projectId, owner: userId });
        if(!project){
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project retrieved successfully", project });
    }catch(err){
        res.status(500).json({ message: "error retrieving project", error: err.message });
    }
}


const updateProject = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;
    const { name, description, members } = req.body;

    try{
        await projectModel.findOneAndUpdate(
            { _id: projectId, owner: userId },
            { name, description, members },
            { new: true }
        );
        res.status(200).json({ message: "Project updated successfully" });

    }catch(err){
        res.status(500).json({ message: "error updating project try again", error: err.message });
    }

}

const deleteProject = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try{
        await projectModel.findOneAndDelete({ _id: projectId, owner: userId });
        res.status(200).json({ message: "Project deleted successfully" });
    }catch(err){
        res.status(500).json({ message: "error deleting project", error: err.message });
    }
}

module.exports = { createProject , getProjects, getProjectById, updateProject, deleteProject };
