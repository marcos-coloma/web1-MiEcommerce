const Product = require('../models/Product');
const productsService = require("../services/productsService");

const productsController = {
    list: (req, res) => {

        const category = req.query.category?.toLowerCase();
        const order = req.query.order;
        const search = req.query.search?.toLowerCase();

        let products = Product.getAll();

        // category
        if (category) {
            products = products.filter(
                p => p.category.toLowerCase() === category
            );
        }

        // search
        products = productsService.search(products, search);

        // sort
        if (order === "asc") {
            products = products.sort((a, b) => a.price - b.price);
        }

        if (order === "desc") {
            products = products.sort((a, b) => b.price - a.price);
        }

        res.render('pages/products', {
            title: "Products",
            products,
            category,
            order,
            search
        });
    }
};

module.exports = productsController;