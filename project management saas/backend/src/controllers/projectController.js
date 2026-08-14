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
















module.exports = { createProject , getProjects };
