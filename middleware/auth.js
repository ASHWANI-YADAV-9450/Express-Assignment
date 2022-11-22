const user = require("../model/userModel")
const isAuthenticatedUser = async(req,res,next)=>{
    try{
        
        let { token } = req.headers;
        if(!token){
            res.status(400).json({
                status:"Fail"
            })
            
        } else{
            try{
                const userDetail = await user.findOne({_id:token})
                req.user = userDetail
                
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






















