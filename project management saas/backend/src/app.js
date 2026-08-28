const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/authRoute")
const projectRoute = require("./routes/projectRoute")
const taskRoute = require("./routes/taskRoute")
const teamRoute = require("./routes/teamRoute")

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));




app.use(cookieParser())


app.use("/auth", authRoute)
app.use("/projects", projectRoute);
app.use("/tasks", taskRoute);
app.use("/teams", teamRoute);









module.exports = app