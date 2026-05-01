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
        const allProducts = Product.getAll();

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        let relatedProducts = [];

        if (product.category) {
            relatedProducts = allProducts.filter(p => 
                p.category === product.category && p.id != product.id
            );

            relatedProducts = relatedProducts.sort(() => 0.5 - Math.random());
            relatedProducts = relatedProducts.slice(0, 4);
        }

        res.render("pages/product", {
            product,
            relatedProducts
        });
    }
};

module.exports = productController;