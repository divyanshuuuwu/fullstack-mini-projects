require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");

const socketSetup = require("./sockets/backendSocket");
const socketAuthMiddleWare = require("./middlewares/socketAuthMiddleware");

const PORT = 3000;

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

// Make cookies available to Socket.IO
io.engine.use(cookieParser());

// Authenticate every Socket.IO connection
io.use(socketAuthMiddleWare);

// Make io available inside Express controllers
app.set("io", io);

// Setup socket events
socketSetup(io);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});