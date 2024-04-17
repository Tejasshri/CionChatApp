const Menu = require("../models/userData");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({});
    setTimeout(() => {
      res.status(200).json(menus);
    }, 3000)
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const createUser = async (req, res) => {
  const { name, phonenumber, area, coach, imageUrl } = req.body;
  try {

    const getUserDetails = await Menu.findOne({ phonenumber: phonenumber });
    console.log(getUserDetails);
    if (getUserDetails){
      return res.status(400).json({ message: "User already exists" });
    }
    else{
      const user = await Menu.create({ name, phonenumber, area, coach, imageUrl });
      res.status(200).json({message : "Successful"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



const webHooks = (req,res)=>{
  const {sender , message } = req.body;
   console.log(`Received message from ${sender}: ${message}`);
   const reply = `Thanks for your message, ${sender}!`;
   console.log(`Sending reply: ${reply}`);
   res.status(200).send('Message received successfully.');

}

module.exports = {
  getAllMenuItems,
  createUser,webHooks
};
