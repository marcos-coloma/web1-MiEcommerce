const Product = require("../models/Product");

const productsService = {

    getAll: () => Product.getAll(),

    getById: (id) => Product.getById(id),

    getByCategory: (categoryId) => Product.getByCategory(categoryId),

    search: (query) => Product.search(query),

    sortByPrice: (products, order = "asc") => {
        return [...products].sort((a, b) =>
            order === "asc"
                ? a.price - b.price
                : b.price - a.price
        );
    },

    getSuggested: () => {
        return Product.getRandom(5);
    },

    getPopular: () => {
        return Product.getPopular();
    },

    getRelated: (product) => {
        if (!product || !product.category_id) return [];

        const all = Product.getAll();

        return all
            .filter(p =>
                p.category_id === product.category_id &&
                p.id !== product.id
            )
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }

};

module.exports = productsService;