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
        const products = Product.getAll();

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        res.render("pages/product", {
            product,
            products
        });
    }
};

module.exports = productController;