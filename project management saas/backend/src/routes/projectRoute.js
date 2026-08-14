const express = require("express");
const router = express.Router(); 
const projectController = require("../controllers/projectController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/create", authMiddleware, projectController.createProject)



module.exports = router