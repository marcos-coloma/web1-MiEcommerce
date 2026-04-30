const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/cart", cartController.cart);

router.post("/cart/add/:id", cartController.add);
router.post("/cart/increase/:id", cartController.increase);
router.post("/cart/decrease/:id", cartController.decrease);
router.post("/cart/remove/:id", cartController.remove);

router.get("/checkout", cartController.checkout);

module.exports = router;