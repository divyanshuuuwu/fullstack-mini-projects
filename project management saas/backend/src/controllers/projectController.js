const projectModel = require("../models/projectModel");
const userModel = require("../models/userModel");


// ==========================================
// CREATE PROJECT
// ==========================================

const createProject = async (req, res) => {
    const {
        name,
        description,
        status,
        priority,
        members = []
    } = req.body;

    const userId = req.user.id;

    try {
        const users = await userModel.find({
            email: { $in: members }
        });

        if (users.length !== members.length) {
            return res.status(400).json({
                message: "One or more emails not found"
            });
        }

        const memberIds = users.map((user) => user._id);

        // Make sure owner is not duplicated
        const uniqueMemberIds = [
            ...new Set([
                userId,
                ...memberIds.map((id) => id.toString())
            ])
        ];

        const newProject = await projectModel.create({
            name,
            description,
            owner: userId,
            status: status || "pending",
            priority,
            members: uniqueMemberIds
        });

        const populatedProject = await projectModel
            .findById(newProject._id)
            .populate("members", "name email");

        res.status(201).json({
            message: "Project created successfully",
            project: populatedProject
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error creating project",
            error: err.message
        });
    }
};


// ==========================================
// GET ALL PROJECTS
// Owner + members can see the project
// ==========================================

const getProjects = async (req, res) => {
    const userId = req.user.id;

    try {
        const projects = await projectModel
            .find({
                members: userId
            })
            .populate("members", "name email");

        res.status(200).json({
            message: "Projects retrieved successfully",
            projects
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving projects",
            error: err.message
        });
    }
};


// ==========================================
// GET ONE PROJECT
// Owner + members can see the project
// ==========================================

const getProjectById = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try {
        const project = await projectModel
            .findOne({
                _id: projectId,
                members: userId
            })
            .populate("members", "name email role");

        if (!project) {
            return res.status(404).json({
                message:
                    "Project not found or you are not a member of this project"
            });
        }

        res.status(200).json({
            message: "Project retrieved successfully",
            project
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving project",
            error: err.message
        });
    }
};


// ==========================================
// UPDATE PROJECT
// Only owner can update
// ==========================================

const updateProject = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    const {
        name,
        description,
        members
    } = req.body;

    try {
        const project = await projectModel.findOne({
            _id: projectId,
            owner: userId
        });

        if (!project) {
            return res.status(404).json({
                message:
                    "Project not found or you don't have permission to update it"
            });
        }

        const updatedProject = await projectModel
            .findByIdAndUpdate(
                projectId,
                {
                    name,
                    description,
                    members
                },
                {
                    new: true
                }
            )
            .populate("members", "name email");

        res.status(200).json({
            message: "Project updated successfully",
            project: updatedProject
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error updating project",
            error: err.message
        });
    }
};


// ==========================================
// DELETE PROJECT
// Only owner can delete
// ==========================================

const deleteProject = async (req, res) => {
    const projectId = req.params.id;
    const userId = req.user.id;

    try {
        const project = await projectModel.findOneAndDelete({
            _id: projectId,
            owner: userId
        });

        if (!project) {
            return res.status(404).json({
                message:
                    "Project not found or you don't have permission to delete it"
            });
        }

        res.status(200).json({
            message: "Project deleted successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error deleting project",
            error: err.message
        });
    }
};


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
};