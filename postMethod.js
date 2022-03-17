const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const port = 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

app.post("/data", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPass = req.body.password;
  res.json(
    {
      success: true,
      name: userName,
      email: userEmail,
      email: userEmail,

      password: userPass,
    }
    // `<h1>Data</h1>${req.body.name}${req.body.email}${req.body.password} `
  );
});

app.listen(port, () => {
  console.log("server is running");
});
