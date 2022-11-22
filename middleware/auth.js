const user = require("../model/userModel")
const isAuthenticatedUser = async(req,res,next)=>{
    try{
        
        let { token } = req.headers;
        if(!token){
            res.status(400).json({
                status:"Fail",
                message: "token not found"
            })
            
        } else{
            try{
                const userDetail = await user.findOne({_id:token})
                // console.log("userDetails",userDetail)
                if(!userDetail){
                  res.status(400).json({
                    status: "Fail",
                    message:"Invalid Id"
                  })
                } else{
                  req.user = userDetail
                }
                // req.user = userDetail
                
              }catch(error){
                res.status(400).json({
                  status: "Fail",
                  message: "incorrect creds try something "
                })
              }
              next()
        }
        
    }catch(error){
        res.status(400).json({
            status: "Fail",
            message: "incorrect creds try something "
          })
    }
    
}

module.exports = {isAuthenticatedUser}






















