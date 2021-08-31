const express = require("express");
const app = express();
const port = 5000;

app.get("/movies", (req, res) => {
  res.send(console.log("hello world"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
