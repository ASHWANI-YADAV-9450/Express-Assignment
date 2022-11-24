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
            try{
                const userDetail = await expire_token.findOne({access_token:(token)})
                // console.log("userDetails",userDetail)
                const createdTime = ({createdAt:userDetail.createdAt})
                const createdTime1 = createdTime.createdAt 
                
                
                if(!userDetail){
                  res.status(400).json({
                    status: "Fail",
                    message:"Invalid Id"
                  })
                } else{
                  // console.log("createwd time ",createdTime.createdAt)
                  const currentTime = new Date();
                  // console.log("current time",currentTime)
                  
                  if(createdTime1.getTime() > currentTime.getTime()){
                    console.log("token pass forward")
                    req.user = userDetail
                  }else{
                    try {
                      let data =  await access_token.findOne({ _id: userDetail })
                      // let data = userDetail
                      if (data) {
                          await data.delete()
                          res.json({ result: "Done", message: "Record is Deleted!!!!!" })
                          console.log("token expire")
                          res.status(400).json({
                            status:"Fail",
                            message:"token expire"
                          })
                      }
                      else
                          res.status(404).json({ result: "Fail", message: "Invalid ID" })
                  } catch (error) {
                      res.status(500).json({ result: "Fail", message: "token expired" })
                  }
                  }
                  
                }
                
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



