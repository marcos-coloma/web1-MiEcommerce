const express = require("express");
const router = express.Router();


router.get("/cart", (req, res) => {
    res.render("pages/cart", { 
        title: "Cart",
        perfilLink: "/login"
    });
});

router.get("/checkout", (req, res) => {
    res.render("pages/checkout", { 
        title: "Checkout",
        perfilLink: "/login"
    });
});



module.exports = router;