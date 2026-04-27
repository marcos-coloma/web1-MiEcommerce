const express = require("express");
const router = express.Router();


router.get("/product", (req, res) => {
    res.render("pages/product", { 
        title: "Product",
        perfilLink: "/login"
    });
});

router.get("/product2", (req, res) => {
    res.render("pages/product2", { 
        title: "Product2",
        perfilLink: "/login"
    });
});


module.exports = router;