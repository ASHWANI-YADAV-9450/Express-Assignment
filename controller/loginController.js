const user = require("../model/userModel");
const bcrypt = require("bcryptjs");



// APi for login
const login = async(req,res)=>{
    try {
      let data = await user.findOne({ username: req.body.username })
      if (data) {
        const  token  = data._id;
          if (await bcrypt.compare(req.body.password, data.password))
              res.status(200).json({
                 status: "Login sucessfully", 
                 message: token })
              
          else
              res.status(400).json({
                 status: "Fail", 
                 message: "Invalid Username or Password" })
  
      }
      else
          res.status(400).json({
             status: "Fail", 
             message: "Invalid Username or Password" })
  }
  catch (error){
      res.status(500).json({
         status: "Fail", 
         message: "Internal Server Error" })
  }
  }

  module.exports = login