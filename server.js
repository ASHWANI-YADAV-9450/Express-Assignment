const app = require("./app")
require("./database")



app.listen(3000, ()=>{
    console.log(`Server is running at port 3000`)
})