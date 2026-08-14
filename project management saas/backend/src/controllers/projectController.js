const projectModel = require("../models/projectModel");


const createProject = async (req, res) => {
    const { name, description } = req.body;
    const userId = req.user.id; // Assuming the user ID is stored in req.user after authentication
    try{
        const newProject = await projectModel.create({
            name,
            description,
            user: userId
        });
        res.status(201).json({ message: "Project created successfully", project: newProject });
    }catch(err){
        res.status(500).json({ message: "error creating project", error: err.message });
    }

}

const getProjects = async (req, res) => {
    const userId = req.user.id;

    try{
        const projects = await projectModel.find({ user: userId });
        res.status(200).json({ message: "Projects retrieved successfully", projects });
    }catch(err){
        res.status(500).json({ message: "error retrieving projects", error: err.message });
    }
}

const getProjectById = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try{
        const project = await projectModel.findOne({ _id: projectId, user: userId });
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
    const { name, description } = req.body;

    try{
        await projectModel.findOneAndUpdate(
            { _id: projectId, user: userId },
            { name, description },
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
        await projectModel.findOneAndDelete({ _id: projectId, user: userId });
        res.status(200).json({ message: "Project deleted successfully" });
    }catch(err){
        res.status(500).json({ message: "error deleting project", error: err.message });
    }
}

module.exports = { createProject , getProjects, getProjectById, updateProject, deleteProject };
