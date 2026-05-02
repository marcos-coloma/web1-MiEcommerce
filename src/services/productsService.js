const Product = require("../models/Product");

const productsService = {

    getAll: () => Product.getAll(),

    getSuggested: () => {
        const products = Product.getAll();
        return [...products]
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
    },

    getPopular: () => {
        const products = Product.getAll();
        return products
            .filter(p => p.popular)
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
    },

    getByCategory: (category) => {
        const products = Product.getAll();
        return products.filter(
            p => p.category.toLowerCase() === category.toLowerCase()
        );
    },

    getById: (id) => Product.getById(id),

    getRelated: (product) => {
        const products = Product.getAll();

        if (!product || !product.category) return [];

        return products
            .filter(p => 
                p.category === product.category && p.id != product.id
            )
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
    },

    sortByPrice: (order = "asc") => {
        const products = Product.getAll();

        return products.sort((a, b) =>
            order === "asc"
                ? a.price - b.price
                : b.price - a.price
        );
    },

    search: (products, query) => {
        if (!query) return products;

        return products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    }
};

module.exports = productsService;