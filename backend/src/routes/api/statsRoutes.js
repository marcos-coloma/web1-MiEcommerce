const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        totalProducts: 0,
        totalCategories: 0
    });
});

module.exports = router;