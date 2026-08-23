const taskController = require('../controllers/taskController')
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware')



router.post('/create/:id', authMiddleware, taskController.createTask)
router.get('/getalltasks/:id', authMiddleware, taskController.getTasks)
router.get('/gettask/:taskId', authMiddleware, taskController.getTaskById)
router.get('/mytasks', authMiddleware, taskController.getMyTasks)

module.exports = router