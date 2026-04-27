const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/home", { 
        title: "Home",
        perfilLink: "/menu"
    });
});

router.get("/menu", (req, res) => {
    res.render("pages/menu", {title:"Menu"});
});

module.exports = router;

