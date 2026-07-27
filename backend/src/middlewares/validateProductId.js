const productsService = require("../services/productsService");
const normalizeId = require("../helpers/normalizeId");

const validateProductId = (req, res, next) => {
    try {

        const id = normalizeId(req.params.id);

        const product = productsService.getById(id);

        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            throw error;
        }

        req.product = product;

        next();

    } catch (error) {
        next(error);
    }
};

module.exports = validateProductId;