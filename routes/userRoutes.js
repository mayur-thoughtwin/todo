const express = require('express');
const validate = require('../middleware/zodvaidate_req');
const { signupValidateby_zod, loginValidateby_zod } = require('../zodvalidate/uservalidate');
const upload = require('../middleware/multer');
const { userSignup, otp_verify, userlogin, getUserDetails, userUpdate, userDelete } = require('../controller/userController');
const userrouter = express.Router();

const verifyToken = require("../middleware/jwt");



userrouter.post('/signup', upload.none(), validate(signupValidateby_zod), userSignup);
userrouter.post('/otp_verify',  upload.none(),verifyToken, otp_verify);
userrouter.post("/login",upload.none(),validate(loginValidateby_zod),userlogin)
userrouter.get("/user_details",verifyToken,getUserDetails)
userrouter.patch("/update_user",upload.single("image"),verifyToken,userUpdate)
userrouter.delete("/delete_user",verifyToken,userDelete)

module.exports = userrouter;