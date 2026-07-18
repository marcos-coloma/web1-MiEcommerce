const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const productsApiController = require('../controllers/api/productsController');

router.get("/products", productsController.list);
router.put("/products/:id/edit", productsApiController.update);
router.delete("/products/:id/delete", productsApiController.delete);

module.exports = router;
