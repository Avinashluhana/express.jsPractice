const express = require("express");

const app = express();
app.set("view engine", "pug");
app.set("views", "./public/views");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});


app.listen(8000, () => console.log("server is running"));
