const mongoose = require("mongoose");
const validator =require("express-validator");
const { checkSchema, validationResult } = require('express-validator');


const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter user name"],
        unique:[true,"username already exists"]
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    },
    email:{
        type:String, 
        required:[true,"Please enter the email"],
        unique:[true,"email already exists"]
    },
    firstName:{
        type:String,
        required:[true,"Please Enter First Name"]
    },
    lastName:{
        type:String,
        required:[true,"Please Enter Last Name"]
    }
})

const user = new mongoose.model("users",userShema);

module.exports=user