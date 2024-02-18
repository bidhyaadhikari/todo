const express=require('express');
const router= express.Router();
const {userRegister,userlogin,homepage}=require('./controller')
router.get('/',homepage)
.post("/register",userRegister)
.post("/login",userlogin)
module.exports=router