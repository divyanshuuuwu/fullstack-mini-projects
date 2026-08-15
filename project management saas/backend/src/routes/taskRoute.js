const taskController = require('../controllers/taskController')
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware')



router.post('/create/:id', authMiddleware, taskController.createTask)
router.get('/gettasks/:id', authMiddleware, taskController.getTasks)

module.exports = router