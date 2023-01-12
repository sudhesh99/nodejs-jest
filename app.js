const express = require("express");
const app = express();

const userRoutes = require("./routes/user.route");
app.use("/", userRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

module.exports = app;
