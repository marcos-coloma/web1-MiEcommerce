const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Vistas
router.get("/login", authController.login);
router.get("/register", authController.register);

// Formularios (POST)
router.post("/login", authController.processLogin);
router.post("/register", authController.processRegister);

module.exports = router;