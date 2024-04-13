const express = require("express");
const app = express();
const cors = require("cors");
const port = 6001;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://sanjukanki56429:dmX96TLZGz7OYS9A@cluster0.eg2lxgb.mongodb.net/")
  .then(() => console.log("Mongodb Connected Successfully."))
  .catch((error) => console.log(`Db Error : ${error}`));
app.listen(port, () => {
    console.log("Server is Running at http://localhost:6001")
})
const userRoutes = require('./routes/userRoutes')
app.use("/users",userRoutes);