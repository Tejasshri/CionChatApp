const Menu = require("../models/userData");

const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function create(){
    const menus = await Menu.insertMany(
    [{
        name : "Sanju",
        phonenumber : 9876543210,
        area : "BTM",
        coach : "Lavan",
        imageUrl : "https://tse1.mm.bing.net/th?id=OIP._YYy6s8YyeN8QARP4vGIdQHaEK&pid=Api&P=0&h=180",
    },
    {
        name : "Sai Pallavi",
        phonenumber : 1111111111,
        area : "BTM",
        coach : "Lavan",
        imageUrl : "https://1.bp.blogspot.com/-xHl0nn_OFIc/WWy5VyZ7NxI/AAAAAAAADBw/FE8K_LR5uC8oV40q15xHAj2e8avwUAwkQCLcBGAs/s1600/6de180a84b5bd163f7f1fdf71f45999f.jpg"
    },
    {
        name : "Sanju",
        phonenumber : 2222222222,
        area : "BTM",
        coach : "Lavan",
        imageUrl : "https://tse4.mm.bing.net/th?id=OIP.5a4l48QGBBsX6JZxlelLEwHaEo&pid=Api&P=0&h=180"
    }]);
}

setTimeout(create, 10000)

module.exports = {
  getAllMenuItems,
};