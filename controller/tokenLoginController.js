const user = require("../model/userModel");
const Token = require("../model/token_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const md5 = require("md5");

const tokenLogin = async (req, res) => {
  try {
    let data = await user.findOne({ username: req.body.username });

    if (data) {
      if (await bcrypt.compare(req.body.password, data.password)) {
        jwt.sign(
          { data },
          process.env.JWT_SECRET,
          { expiresIn: "1hr" },
          async (err, token) => {
            if (err) {
              res.json({
                result: "something went wrong, please try after something",
              });
            }

           
            let tokenData = new Token({
              user_id: data._id,
              access_token: token,
            });
            await tokenData.save();
            // console.log("tokenData", tokenData);
            // console.log("ssssssssssssss", token);
            //
            res.status(200).json({
              status: "Login sucessfully",
              message: token,
            });
          }
          // process.env.JWT_SECRET
        );
        //  console.log("ddddddddddddddddddddddddddddddd",data)
      } else {
        res.status(400).json({
          status: "Fail",
          message: "Invalid Username or Password",
        });
      }

      ////
    } else
      res.status(400).json({
        status: "Fail",
        message: "Invalid Username or Password",
      });
  } catch (error) {
    res.status(500).json({
      status: "Failhhhhhhhh",
      message: "Internal Server Error",
    });
  }
};
module.exports = tokenLogin;
