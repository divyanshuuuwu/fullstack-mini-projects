require("dotenv").config();
const app = require("./app")
const connectDB = require("./config/db")
const PORT = 3000
connectDB()






















app.listen(PORT, ()=>{
    try{
        console.log(`server is running on ${PORT}`)
    }catch(err){
                console.log(err)
    }
})