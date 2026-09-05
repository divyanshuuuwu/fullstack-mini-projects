const jwt = require("jsonwebtoken");

const socketAuthMiddleWare = (socket, next) => {

    const token = socket.request.cookies?.token;

    if (!token) {
        return next(new Error("Authentication error"));
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        socket.userId = decoded.id;


        next();

    } catch (error) {

        next(new Error("Invalid token"));

    }
};

module.exports = socketAuthMiddleWare;