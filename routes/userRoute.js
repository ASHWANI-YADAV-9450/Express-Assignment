
const express = require("express");
const address = require("../controller/addressController");
const deleteUser = require("../controller/deleteController");
const getAllUser = require("../controller/getAllUserController");
const getUser = require("../controller/getUser");
const login = require("../controller/loginController");
const register = require("../controller/registerController");
const tokenLogin = require("../controller/tokenLoginController");
const { isAuthenticatedUser } = require("../middleware/auth");
const { userValidationRules } = require("../validator/validator");



const router = express.Router();


router.post("/register", userValidationRules(), register);
router.post("/login",login);
router.get("/get",isAuthenticatedUser,getUser);
router.delete("/delete",isAuthenticatedUser,deleteUser);
router.get("/list", getAllUser);
router.post("/tokenLogin",tokenLogin);
router.post("/address",isAuthenticatedUser,address)


module.exports=router