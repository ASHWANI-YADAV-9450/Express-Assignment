const user = require("../model/userModel");
const bcrypt = require("bcryptjs");

const deleteUser = async(req,res)=>{
    try{
      const data = req.user
      if(data){
        await data.delete()
        res.status(200).json({
          result:"success", 
        message: "Record is Deleted"})
      } else{
        res.status(400).json({
          result:"Fail", 
        message: "Invalid ID"})
      }
    }catch(error){
      res.status(500).json({
        status:"Internal server error"
      })
    }
  }
  
  module.exports = deleteUser