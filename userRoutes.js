const express = require("express");
const registerUser = require("./userControl")
const router = express.Router()

router.route("/data").post(registerUser).get((req,res)=> {
    res.send("hale payo nah?")
});


module.exports = router;