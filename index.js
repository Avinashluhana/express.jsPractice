const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("express.js");
});
app.listen(5000, () => console.log("server is running"));
// added comment