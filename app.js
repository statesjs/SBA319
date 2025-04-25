require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5050;

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//views
app.set("view engine", "ejs");
app.use(express.static("./public/index.css"));
//users ROUTER
const userRoutes = require("./routes/userRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const commentRoutes = require("./routes/commentRoutes");
//implementing routes
app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/comments", commentRoutes);
//ROOT get request + view
app.get("/", (req, res) => {
  res.render("./views/index.ejs");
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
