const express = require("express");
const app = express();


app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());

const userRoutes = require("./routes/user.route");
app.use("/", userRoutes);



module.exports = app;
