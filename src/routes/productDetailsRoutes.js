const express = require("express");
const router = express.Router();
const productDetailsController = require("../controllers/productDetailsController");
const validateProductId = require("../middlewares/validateProductId");

router.get("/products/:id", validateProductId, productDetailsController.detail);

module.exports = router;