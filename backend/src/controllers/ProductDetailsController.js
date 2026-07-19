const productsService = require("../services/productsService");

const productDetailsController = {

    detail: (req, res) => {
        try {

            const product = req.product;

            const relatedProducts = productsService.getRelated(product);

            res.render("pages/productDetails", {
                title: "Product",
                product,
                relatedProducts
            });

        } catch (err) {
            return res.status(err.status || 500).render("errors/500");
        }
    }

};

module.exports = productDetailsController;