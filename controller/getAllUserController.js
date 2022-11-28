const user = require("../model/userModel");

const getAllUser =  async(req,res)=>{
    try{
        let {page} =req.query;
        if(!page) page=1;
        const  limit =10;

        const skip = (page - 1)*10;
        const data = await user.find().skip(skip).limit(limit)
        res.status(200).json({
            status: "success",
            page:page,
            limit:limit,
            data: data
        })
    }catch(error){
        res.status(500).json({
            status:"Internal server error"
        })
    }
}

module.exports = getAllUser