const productsService = require("../services/productsService");
const categoriesService = require("../services/api/categoriesService");

const productDetailsController = {

    detail: (req, res) => {
        try {

            const product = req.product;

            const relatedProducts = productsService.getRelated(product);
            const categories = categoriesService.getAll();

            res.render("pages/productDetails", {
                title: "Product",
                product,
                relatedProducts,
                categories
            });

        } catch (err) {
            return res.status(err.status || 500).render("errors/500");
        }
    }

};

module.exports = productDetailsController;