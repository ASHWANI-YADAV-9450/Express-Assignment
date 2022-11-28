const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:[true, "Please provide user Id"]
    },
    address:{
        type:String,
        required:[true, "Address must required"]
    },
    city:{
        type:String,
        required:[true,"City name must required"]
    },
    state:{
        type:String,
        required:[true,"State name must required"]
    },
    pin_code:{
        type:String,
        required:[true,"Pin Code must required"]
    },
    phone:{
        type: Number,
        required:[true,"phone number must required"]
    }
})

const userAddress = new mongoose.model("address",addressSchema)

module.exports = userAddress