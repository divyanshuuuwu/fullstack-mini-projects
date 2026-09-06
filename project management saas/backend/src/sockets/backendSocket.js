const notificationHandler = require("../sockets/notifications");

const socketSetup = (io) => {

    io.on("connection", (socket) => {

        console.log("User connected:", socket.id);
        console.log("socket.userId:", socket.userId);

        if (!socket.userId) {
            console.log("No userId found");
            return;
        }

        // Each user gets their own room
        socket.join(socket.userId.toString());

        notificationHandler(io, socket);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });

    });

};

module.exports = socketSetup;