const express = require("express")
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware");
const reviewController = require("../controllers/reviewController");
const router = express.Router()

router.post("/signup" ,userController.signup)

router.post("/login", userController.login);


module.exports = router;