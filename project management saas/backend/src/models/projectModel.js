const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,},
    description:{
        type:String,
        required:true,},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
    
    
    })

const projectModel = mongoose.model("Project", projectSchema)
module.exports = projectModel