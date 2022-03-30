const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/public/theme2/index.html");
});

app.get("/3", (req, res) => {
  res.sendFile(__dirname + "/public/theme3/index.html");
});

app.get("/4", (req, res) => {
  res.sendFile(__dirname + "/public/theme4/index.html");
});
app.listen(8080, () => console.log("listening on port 8080"));
