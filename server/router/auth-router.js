const express = require("express");
const router=express.Router();

const authcontroller=require("../controller/auth-controller");



router.route("/").post(authcontroller.register);
router.route("/Login").post(authcontroller.login);

module.exports=router;