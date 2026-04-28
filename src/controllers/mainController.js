const Product = require("../models/Product");

const mainController = {

    home: (req, res) => {
        const products = Product.getAll();

        res.render("pages/home", { 
            products
        });
    },

    menu: (req, res) => {
        res.render("pages/menu", { 
            title: "Menu"
        });
    }
};

module.exports = mainController;

