const express =  require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// import route
const routes = require("./routes/index")



app.use("/",routes)
// console.log(user)

module.exports = app