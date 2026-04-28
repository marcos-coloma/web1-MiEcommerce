const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/product", productController.product);
router.get("/product2", productController.product2);

module.exports = router;