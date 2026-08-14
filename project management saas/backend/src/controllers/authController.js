const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = async(req,res)=>{
    const {name,email,password,role,avatar} = req.body

    try{
        const userExists = await userModel.findOne({email})
        if(userExists){
            return res.status(400).json({message:"user already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const createdUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role,
            avatar
        })

        res.status(201).json({message:"user created successfully", user: createdUser})

    }catch(err){
        res.status(500).json({message:"error creating user", error: err.message})
    }
}






const loginUser = async(req,res)=>{
    const {email,password} = req.body
    
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(400).json({message:"invalid password"})
    }

    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn:"1h"})
        res.cookie("token", token)
        res.status(200).json({message:"login successful"})
    
}





module.exports = {registerUser,loginUser}




















