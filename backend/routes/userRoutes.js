const express = require("express");
const Menu = require("../models/userData");
const router = express.Router();

const menuController = require("../controllers/userController");

// get all menu items
router.get("/", menuController.getAllMenuItems);

module.exports = router;