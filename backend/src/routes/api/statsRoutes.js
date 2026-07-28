const express = require("express");
const router = express.Router();

const statsController = require("../../controllers/api/statsController");

router.get("/", statsController.index);

module.exports = router;