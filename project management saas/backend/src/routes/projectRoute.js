const express = require("express");
const router = express.Router(); 
const projectController = require("../controllers/projectController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/create", authMiddleware, projectController.createProject)
router.get("/get", authMiddleware, projectController.getProjects)
router.get("/get/:id", authMiddleware, projectController.getProjectById)
router.put("/update/:id", authMiddleware, projectController.updateProject)
router.delete("/delete/:id", authMiddleware, projectController.deleteProject)

module.exports = router