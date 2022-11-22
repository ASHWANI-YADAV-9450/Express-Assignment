
const express = require("express");
const deleteUser = require("../controller/deleteController");
const getUser = require("../controller/getUser");
const login = require("../controller/loginController");
const register = require("../controller/registerController");
const { isAuthenticatedUser } = require("../middleware/auth");
const { userValidationRules,validate } = require("../validator/validator");



const router = express.Router();


router.post("/register",userValidationRules(), validate,register);
router.post("/login",login);
router.get("/get",isAuthenticatedUser,getUser);
router.delete("/delete",isAuthenticatedUser,deleteUser)



module.exports=router