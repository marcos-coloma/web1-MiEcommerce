const Product = require("../models/Product");

const mainController = {

    home: (req, res) => {
        const products = Product.getAll();

        const shuffled = [...products]
        .sort(() => Math.random() - 0.5);

        const suggested = shuffled.slice(0, 5);

        const popularProducts = products
        .filter(p => p.popular)
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

        res.render("pages/home", { 
            products,
            suggested,
            popularProducts
        });
    },

    menu: (req, res) => {
        res.render("pages/menu", { 
            title: "Menu"
        });
    }
};

module.exports = mainController;

