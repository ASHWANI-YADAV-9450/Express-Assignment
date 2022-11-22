const express =  require("express");
const app = express();
const user = require("./userRoute")

// console.log("knksdsdn",user)
app.use("/user",user)




module.exports = app