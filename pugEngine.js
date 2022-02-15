const express = require("express");

// pug engine

const app = express();
app.set("view engine", "pug");
app.set("views", "./public/views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Geo",
    message: "Zindgi dadi dukhi athai piyara",
  });
});

app.listen(8000, () => console.log("server is running"));

// contribution
