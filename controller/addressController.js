const userAddress = require("../model/addressModel");
const user = require("../model/userModel");
const acccess_token = require("../middleware/auth");



const address = async(req,res)=>{
    try{
    const {user_id, address, city, state, pin_code, phone} = req.body;

    const Address = await userAddress.create({
        user_id, address, city, state,pin_code, phone
    })
    // console.log("userid",Address.user_id)
    // console.log("address id",(Address._id))
    const data = await user.findById(Address.user_id)

    if(data){
        data.address.push(Address._id)
        data.save()
    }
    console.log("data",data)
    
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