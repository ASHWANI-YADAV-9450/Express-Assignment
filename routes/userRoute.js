
const express = require("express");
const address = require("../controller/addressController");
const deleteUser = require("../controller/deleteController");
const getAddress = require("../controller/getaddress");
const getAllUser = require("../controller/getAllUserController");
const getUser = require("../controller/getUser");
const login = require("../controller/loginController");
const register = require("../controller/registerController");
const tokenLogin = require("../controller/tokenLoginController");
const isAuthenticatedUser = require("../middleware/jwt")
const { userValidationRules } = require("../validator/validator");



const router = express.Router();


router.post("/register", userValidationRules(), register);
router.post("/login",login);
router.get("/get",isAuthenticatedUser,getUser);
router.delete("/delete",isAuthenticatedUser,deleteUser);
router.get("/list", getAllUser);
router.post("/tokenLogin",tokenLogin);
router.post("/address",isAuthenticatedUser,address)
router.get("/get/:user_id",getAddress)


module.exports=router