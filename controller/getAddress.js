const address = require("../model/addressModel");
const user = require("../model/userModel");

const getAddress =  async(req,res)=>{
    try{
        const data = await user.findById(req.params.user_id).populate('address');
        // const data = await address.findById(req.params.user_id).populate('user_id');
        console.log("data",data)

        res.status(200).json({
            status:"success",
            message: data
        })
    }catch(error){
        res.json({
            status:"Fail",
            error: error.message
        })
    }
}

module.exports=getAddress