
const express = require("express");
const {register} = require("../controller/userController");
const { userValidationRules, validate } = require("../middleware/validator")

const router = express.Router();


router.post("/register",userValidationRules(), validate,register);



module.exports=router