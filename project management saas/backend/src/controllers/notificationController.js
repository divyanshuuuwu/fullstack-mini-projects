const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");
const taskModel = require("../models/taskModel");
const notificationModel = require("../models/notificationModel");


// ==========================================
// CREATE NOTIFICATION
// ==========================================

const createNotification = async (req, res) => {
    const userId = req.user.id;

    const {
        recipient,    
        type,
        message,
        project,
        task
    } = req.body;

    try {
        const recipientUser = await userModel.findById(recipient);
        const senderUser = await userModel.findById(userId);

        if (!recipientUser) {
            return res.status(400).json({
                message: "Recipient not found"
            });
        }

        if (!senderUser) {
            return res.status(400).json({
                message: "Sender not found"
            });
        }

        const notification = await notificationModel.create({
            recipient: recipientUser._id,
            sender: senderUser._id,
            type,
            message,
            project,
            task
        });
        
        res.status(201).json({
            message: "Notification created successfully",
            notification
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error creating notification",
            error: err.message
        });
    }
}





module.exports = {createNotification}   