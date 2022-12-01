const express =  require("express");
const app = express();
const user = require("./userRoute")


app.use("/user",user)




module.exports = app