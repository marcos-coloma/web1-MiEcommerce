const Product = require("../models/Product");

const productController = {

    list: (req, res) => {
        const products = Product.getAll();

        res.render("pages/products", {
            products
        });
    },

    detail: (req, res) => {
        const product = Product.getById(req.params.id);

        res.render("pages/product", {
            product
        });
    }
};

module.exports = productController;