const user = require("../model/userModel");
const bcrypt = require("bcryptjs");



//  Registration
 
const register =  async(req,res)=>{
    try{
      const {username, password, confirm, email,firstName, lastName} = req.body;
  
    // confirm password
    if(password !== confirm){
      res.status(401).json({
        status:"Password not matched"
      })
    } else{
      const User = await user.create({
        username,password,email,firstName,lastName
      })
      //Password hashing
      bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(User.password, salt, async(err, hash)=>{
          if(err) throw err;
          User.password =hash;
         await User.save()
  
         res.status(201).json({
          status:"success",
          data:User
        })
        })
      })
    }
    }catch(error){
      if(error.username){
        res.status(401).send({ result: "Fail", message: "User Name is already in use" })
      } else if(error.email){
        res.status(401).send({result: "Fail", message:"Email is already in use"})
      }
      else{
        res.status(400).json({
          status:"fail",
          error: error.message
    
        })
      }
     
    }
  }
  module.exports = register