const user = require("../model/userModel");
const bcrypt = require("bcryptjs");

// Get Api
const getUser = async(req,res)=>{
    try{
      // const data = req.user
      res.status(200).send(req.user)
    }catch(error){
      res.status(500).send({result:"Fail", message:"Internal server error"})
    }
  }
  module.exports = getUser;