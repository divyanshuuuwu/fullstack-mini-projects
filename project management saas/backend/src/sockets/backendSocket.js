// Backend for socket.io
const notificationHandler = require("../sockets/notifications")


const socketSetup= (io) => {

    io.on("connection", (socket) => {

        console.log("User connected:", socket.id);
        console.log( "socket.userId:", socket.userId)
        
        notificationHandler(io, socket)
       


        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });

    });

};

module.exports = socketSetup;