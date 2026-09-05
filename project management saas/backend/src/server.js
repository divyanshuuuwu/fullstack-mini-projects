require("dotenv").config();
const http = require("http");
const app = require("./app")
const connectDB = require("./config/db")
const PORT = 3000
connectDB()
const { Server } = require("socket.io");
const server = http.createServer(app);
const socketSetup = require("./sockets/backendSocket");
const cookieParser = require("cookie-parser")
const socketAuthMiddleWare = require("./middlewares/socketAuthMiddleware")


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

io.engine.use(require("cookie-parser")());
io.use(socketAuthMiddleWare)



socketSetup(io);




server.listen(3000, () => {
    console.log("Server running on port 3000");
});