const router = require("express").Router();
const LoginController = require("../controllers/login.controller")

// Create user in database
router.post("/register", LoginController.create)

// Login User
router.post("/login", LoginController.login)

module.exports = router;