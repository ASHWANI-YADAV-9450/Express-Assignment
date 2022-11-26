const mongoose = require("mongoose");


const tokenSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:[true,"Please provide user id"],
    },
    access_token:{
        type:String,
        required:[true, "Please provide token"]
    },
      createdAt: {
        type: Date,
        // default: Date.now ,
        default: new Date(Date.now() +  ( 60* 60 * 1000) ),
        // let expiryDate2 = new Date(Date.now() + 2 * (60 * 60 * 1000) );
      },
})

const expire_token = new mongoose.model("access_token",tokenSchema);

module.exports= expire_token;