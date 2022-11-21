const express =  require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(expressValidator())


// import route
const user = require("./routes/userRoute")



app.use("/user",user)

module.exports = app