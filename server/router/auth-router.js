const express = require("express");
const router=express.Router();

const authcontroller=require("../controller/auth-controller");



router.route("/").post(authcontroller.register);
router.route("/Login").post(authcontroller.login);
router.route("/Address").post(authcontroller.saveAddress);
router.route("/Battery").post(authcontroller.swapBattery);


module.exports=router;