const express = require("express");
const app = express();

// global middleware which can be used for all routes

var middlewareChecking = function (res, req, next) {
  console.log("middle ware hale payo");
  next();
};

// this way we can use

app.use(middlewareChecking);

// middleware for specific route

// adding username validation

var validation = function (req, res, next) {
  if ((req.params.username == "avinash")) {
    console.log("User Validated");
  }
  else{
      console.log("user not validated");
  }

  next();
};

app.get("/user/:username", validation, (req, res) => {
  res.send("user profile");
});

app.get("/", (req, res) => {
  res.send("hale payo?");
});
app.listen(8000, () => console.log("server is running"));
