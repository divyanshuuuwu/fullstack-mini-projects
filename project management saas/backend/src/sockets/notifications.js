const notificationHandler = (io, socket) => {

    socket.on("sendNotification", (data) => {

        console.log("Notification received:", data);

        // Send notification to the intended user
        io.to(data.socketId).emit("notification", {
            message: data.message
        });

    });

};

module.exports = notificationHandler;