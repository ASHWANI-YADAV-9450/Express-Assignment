const express =  require("express");
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// import route
const routes = require("./routes/index")



app.use("/",routes)

module.exports = app