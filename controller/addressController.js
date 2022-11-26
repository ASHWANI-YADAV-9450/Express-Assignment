const userAddress = require("../model/address");
const acccess_token = require("../middleware/auth");



const address = async(req,res)=>{
    try{
    const {user_id, address, city, state, pin_code, phone} = req.body;

    const Address = await userAddress.create({
        user_id, address, city, state,pin_code, phone
    })
    console.log("Address",Address)
    res.status(201).json({
        status: "success",
        message: Address
    })
    }catch(error){
        console.log("error: ",error.message)
        res.status(500).json({
            status:"Fail",
            error: error.message
        })
    }
}


module.exports = address