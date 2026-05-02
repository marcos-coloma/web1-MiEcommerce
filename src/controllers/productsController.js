const Product = require('../models/Product');

const productsController = {
    list: (req, res) => {

        const category = req.query.category?.toLowerCase();
        const order = req.query.order;

        let products = Product.getAll();


        if (category) {
            products = products.filter(
                p => p.category.toLowerCase() === category
            );
        }

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
            order
        });
    }
};

module.exports = productsController;