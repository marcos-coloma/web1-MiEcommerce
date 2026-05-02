const productsService = require("../services/productsService");
const normalizeId = require("../helpers/normalizeId");

const productController = {

detail: (req, res) => {
    try {
        const id = normalizeId(req.params.id);
        const product = productsService.getById(id);

        if (!product) {
            return res.status(404).render("errors/404");
        }

        const relatedProducts = productsService.getRelated(product);

        res.render("pages/product", {
            title: "Product",
            product,
            relatedProducts
        });

    } catch (err) {
        return res.status(err.status || 500).render("errors/500");
    }
}


};

module.exports = productController;