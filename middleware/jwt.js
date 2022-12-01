const user = require("../model/userModel")
const expire_token = require("../model/token_schema");
let jwt = require('jsonwebtoken');


const isAuthenticatedUser = async(req,res,next)=>{
    try{
        let token = req.headers['authorization'];
        // console.log("jwt", jwtToken)
        if(token){
          token =  token.split(' ')[1];
        //   console.log("middleware called if",token)
          jwt.verify(token, process.env.JWT_SECRET, async(err, valid)=>{
            if(err){
               res.json({message: "Please provide valid token"})
            } else{
                const userDetail = await expire_token.findOne({token})
                if(userDetail){
                    req.user = userDetail
                    
                }
                res.status(200).json({
                    status:"success",
                    message: userDetail
                })
                next();
                
            }
          })

        } else{
            res.status(400).json({
                satatus:"Fail",
                message:"Please add token with header"
            })
        }
        



    }catch(error){
        res.status(500).json({
            status:"Fail",
            message:"Internal server eroor"
        })
    }
}


module.exports=isAuthenticatedUser