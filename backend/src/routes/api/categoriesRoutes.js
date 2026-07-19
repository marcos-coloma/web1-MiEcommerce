const express = require("express");
const router = express.Router();

const categoriesController = require("../../controllers/api/categoriesController");


router.get(
    "/",
    categoriesController.list
);


module.exports = router;