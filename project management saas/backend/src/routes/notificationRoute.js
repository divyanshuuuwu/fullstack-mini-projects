const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware")
const notificationController = require("../controllers/notificationController")

const router = express.Router();


router.post("/create", authMiddleware, notificationController.createNotification)
router.get("/get", authMiddleware, notificationController.getNotifications)









module.exports = router;