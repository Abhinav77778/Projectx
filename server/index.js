const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the CampusHub server");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});