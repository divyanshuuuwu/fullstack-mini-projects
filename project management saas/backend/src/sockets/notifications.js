const notificationHandler = (io, socket) => {

    socket.emit("notification", {
        message: "Hello! You have a notification."
    });

}

    

module.exports = notificationHandler;