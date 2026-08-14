const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/authRoute")

app.use(cookieParser())


app.use("/auth", authRoute)













module.exports = app