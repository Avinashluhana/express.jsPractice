const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoutes");
const port = 2000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));  
});

// `<h1>Data</h1>${req.body.name}${req.body.email}${req.body.password} `

app.listen(port, () => {
  console.log(`server hale payo hin  ${port} te`);
});
