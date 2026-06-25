const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const adminOnly =
require("../middleware/adminMiddleware");

const {
  getUsers
} =
require("../controllers/userController");

router.get(
  "/all",
  protect,
  adminOnly,
  getUsers
);

module.exports =
router;