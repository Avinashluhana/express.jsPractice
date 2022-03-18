const express = require("express");
const registerUser = require("./userControl")
const router = express.Router()

router.route("/data").post(registerUser);


module.exports = router;