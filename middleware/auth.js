const user = require("../model/userModel")
const expire_token = require("../model/token_schema");
const md5 = require("md5")
const isAuthenticatedUser = async(req,res,next)=>{
    try{
        
        let { token } = req.headers;
        if(!token){
            res.status(400).json({
                status:"Fail",
                message: "token not found"
            })
        } else{
                const userDetail = await expire_token.findOne({access_token:(token)})
                const createdTime = ({createdAt:userDetail.createdAt})
                const createdTime1 = createdTime.createdAt 
                
                if(!userDetail){
                  res.status(400).json({
                    status: "Fail",
                    message:"Invalid Id"
                  })
                } else{
                  const currentTime = new Date();
                  
                  if(createdTime1.getTime() > currentTime.getTime()){
                    req.user = userDetail
                  }else{
                      let data =  await access_token.findOne({ user_id: userDetail })

                      if (data) {
                          await data.delete()
                          res.json({ 
                            status: "success",
                             message: "Record is Deleted!!!!!" })
                             
                          res.status(400).json({
                            status:"Fail",
                            message:"token expire"
                          })
                      }
                      else
                          res.status(400).json({
                             status: "Fail",
                             message: "Invalid ID" 
                            })
                  }
                  
                }
              
              next()
        }
        
    }catch(error){
        res.status(500).json({
            status: "Fail",
            message: "incorrect creds try something "
          })
    }
    
}

// module.exports = {isAuthenticatedUser}



