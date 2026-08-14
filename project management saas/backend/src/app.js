const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/authRoute")
const projectRoute = require("./routes/projectRoute")

app.use(cookieParser())


app.use("/auth", authRoute)
app.use("/projects", projectRoute);











module.exports = app