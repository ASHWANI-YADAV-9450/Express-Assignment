
const express = require("express");
const {register, login, getUser,} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const { userValidationRules, validate } = require("../middleware/validator");



const router = express.Router();


router.post("/register",userValidationRules(), validate,register);
router.post("/login",login);
router.get("/get",isAuthenticatedUser,getUser)



module.exports=router