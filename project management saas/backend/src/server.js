require("dotenv").config();
const http = require("http");
const app = require("./app")
const connectDB = require("./config/db")
const PORT = 3000
connectDB()
const { Server } = require("socket.io");
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});


io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});






server.listen(3000, () => {
    console.log("Server running on port 3000");
});