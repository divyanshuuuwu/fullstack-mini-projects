const teamController = require('../controllers/teamController')
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/create', authMiddleware, teamController.createTeam)
router.get('/getallteams', authMiddleware, teamController.getTeams)
router.get('/getteam/:id', authMiddleware, teamController.getTeamById)

module.exports = router