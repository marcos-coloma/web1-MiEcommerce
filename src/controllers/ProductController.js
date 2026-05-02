const productsService = require("../services/productsService");

const productController = {

    list: (req, res) => {
        const products = productsService.getAll();

        res.render("pages/products", {
            products
        });
    },

    detail: (req, res) => {
        const product = productsService.getById(req.params.id);

        if (!product) {
            return res.status(404).render("errors/404");
        }

        const relatedProducts = productsService.getRelated(product);

        res.render("pages/product", {
            title: "Product",
            product,
            relatedProducts
        });
    }
};

module.exports = productController;