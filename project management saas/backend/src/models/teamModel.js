const mongoose =require("mongoose")

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
   
},{timeStamps:true})  

const teamModel = mongoose.model("Team", teamSchema)
module.exports = teamModel