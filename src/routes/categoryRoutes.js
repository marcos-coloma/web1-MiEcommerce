const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/categories/:category', categoryController.listByCategory);

module.exports = router;