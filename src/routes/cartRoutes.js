const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/cart", cartController.cart);
router.post("/cart/add/:id", cartController.add);

router.get("/checkout", cartController.checkout);

module.exports = router;