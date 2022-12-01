const address = require("../model/addressModel");
const user = require("../model/userModel");

const getAddress =  async(req,res)=>{
    try{
        const data = await user.findById(req.params.user_id).populate('address');

        res.status(200).json({
            status:"success",
            message: data
        })
    }catch(error){
        res.json({
            status:"Fail",
            message:"Internal server error" 
        })
    }
}

module.exports=getAddress