const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,},
    description:{
        type:String,
        required:true,},
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    status:{
        type:String,
        enum:["pending", "in-progress", "completed", "overdue"],
        default:"pending"
    },
    priority:{
        type:String,
        enum:["low", "medium", "high"],
        default:"medium"
    }

}
, {timestamps:true})

const projectModel = mongoose.model("Project", projectSchema)
module.exports = projectModel