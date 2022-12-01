const userAddress = require("../model/addressModel");
const user = require("../model/userModel");
const acccess_token = require("../middleware/auth");


const address = async(req,res)=>{
    try{
    const {user_id, address, city, state, pin_code, phone} = req.body;

    const Address = await userAddress.create({
        user_id, address, city, state,pin_code, phone
    })
    console.log("hhhhhhhhhhhhhhhhhhh",Address.user_id)
    const data = await user.findById(Address.user_id)
    // console.log("data",data)

    if(data){
        console.log("data",data)
        data.address.push(Address._id)
        data.save()
    }
    
    res.status(200).json({
        status: "success",
        message: Address
    })
    }catch(error){
        // res.status(500).json({
        //     status: "Failhhhhhhhh",
        //     message: "Internal Server Error",
        //   });
    }
}


module.exports = address