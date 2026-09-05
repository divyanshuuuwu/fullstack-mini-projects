import { io } from "socket.io-client";

console.log("Creating socket...");

const socket = io("http://localhost:3000", {
    withCredentials: true
});

socket.on("notification", (data) => {
    console.log("Notification received:", data);
});




export default socket;