require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5050;

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//users ROUTER
const userRoutes = require("./routes/userRoutes");
//implementing routes
app.use("/api/users", userRoutes);
//ROOT get request
app.get("/", (req, res) => {
  res.json("Welcome to the DevLink API!");
});
// Connect to Database + Start Server
mongoose
  .connect(process.env.ATLAS_URI, {
    family: 4, //I needed this for me
  })
  .then(() => {
    console.log(`Connected to database DevLink`);
    app.listen(PORT, () => {
      console.log(`Connected to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to connect to database DevLink`);
  });
