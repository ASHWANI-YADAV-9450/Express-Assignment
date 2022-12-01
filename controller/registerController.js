const user = require("../model/userModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const md5 = require("md5");



//  Registration
 
const register =  async(req,res)=>{
    try{
      const {username, password, confirm, email,firstName, lastName,address, access_token} = req.body;
    // confirm password
    if(password !== confirm){
      res.status(400).json({
        status:"Password not matched"
      })
    } else{
      const User = await user.create({
        username,password,email,firstName,lastName,address,access_token
      })
      //Password hashing
      bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(User.password, salt, async(err, hash)=>{
          if(err) throw err;
          User.password =hash;
        const save= await User.save();
        const userId = save._id
      
      let data = await user.findOne(userId)
      
      // if (data) {
      //     data.access_token = md5(userId)
      //     await data.save()

      //     res.status(200).json({
      //       status:"success",
      //       data:data
      //     })
      // }
      // else
      //     res.status(400).json({
      //        status: "Fail", 
      //        message: "Invalid ID" 
      //       })
        })
      })
    }
    }catch(error){
      if(error.username){
        res.status(400).json({
           status: "Fail",
            message: "User Name is already in use" })
      } else if(error.email){
        res.status(400).json({
          status: "Fail", 
          message:"Email is already in use"})
      }
      else{
        res.status(400).json({
          status:"Fail",
          message: error.message
    
        })
      }
    }
  }
  module.exports = register