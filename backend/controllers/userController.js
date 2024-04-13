const Menu = require("../models/userData");

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
    const getUserDetails = Menu.findOne({ phonenumber: phonenumber });
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


// setTimeout(create, 10000)

module.exports = {
  getAllMenuItems,
  createUser
};