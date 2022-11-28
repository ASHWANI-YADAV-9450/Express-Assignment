const user = require("../model/userModel");
const access_token = require("../model/token_schema")
const bcrypt = require("bcryptjs");
const md5 = require("md5");

const tokenLogin = async(req,res)=>{
    try {
        let data = await user.findOne({ username: req.body.username })
        if (data) {
          let tokenData = new access_token({
            user_id: data._id,
            access_token: md5(data._id)
          });
          await tokenData.save()

            if (await bcrypt.compare(req.body.password, data.password)){
                res.status(200).send({ result: "Login sucessfully", acccess_token: tokenData })
            }
            
               
               
                
            else{
                res.status(404).send({ result: "Fail", message: "Invalid Username or Password" })

            }
     
        }
        else
            res.status(404).send({ result: "Fail", message: "Invalid Username or Password" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

module.exports =tokenLogin