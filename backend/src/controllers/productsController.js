const productsService = require("../services/productsService");
const categoriesService = require("../services/api/categoriesService");

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

        const categories = categoriesService.getAll();

        res.render("pages/products", {
            title: "Products",
            products,
            categories,
            category,
            order,
            search
        });
    }
};

module.exports = productsController;