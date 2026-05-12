const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const validateProductId = require("../middlewares/validateProductId");

router.get("/cart", cartController.cart);

router.post("/cart/add/:id", validateProductId, cartController.add);
router.post("/cart/increase/:id", validateProductId, cartController.increase);
router.post("/cart/decrease/:id", validateProductId, cartController.decrease);
router.post("/cart/remove/:id", validateProductId, cartController.remove);

router.get("/checkout", cartController.checkout);

module.exports = router;