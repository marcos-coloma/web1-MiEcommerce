const productsService = require("../services/productsService");

const productsController = {
    list: (req, res) => {

        const category = req.query.category?.toLowerCase();
        const order = req.query.order;
        const search = req.query.search?.toLowerCase();

        let products = productsService.getAll();

        products = productsService.filterByCategory(
            products,
            category
        );

        products = productsService.search(products, search);

        if (order) {
            products = productsService.sortByPrice(products, order);
        }

        res.render("pages/products", {
            title: "Products",
            products,
            category,
            order,
            search
        });
    }
};

module.exports = productsController;