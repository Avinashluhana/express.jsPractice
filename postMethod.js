const express = require("express");
const path = require("path");

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

app.post("/data", (req, res) => {
  res.send("<h1>Data</h1>");
});

app.listen(port, () => {
  console.log("server is running");
});
