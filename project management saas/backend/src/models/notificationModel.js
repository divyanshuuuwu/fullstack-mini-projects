const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        type: {
            type: String,
            enum: [
                "project_added",
                "task_assigned",
                "task_updated"
            ],
            required: true
        },

        message: {
            type: String,
            required: true
        },

        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        },

        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        },

        isRead: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Notification", notificationSchema);