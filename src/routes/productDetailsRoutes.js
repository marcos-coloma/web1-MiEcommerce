const express = require("express");
const router = express.Router();
const productDetailsController = require("../controllers/productDetailsController");

router.get("/products/:id", productDetailsController.detail);

module.exports = router;