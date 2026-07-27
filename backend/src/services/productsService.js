const Product = require("../models/Product");

const productsService = {

    getAll: () => Product.getAll(),

    getById: (id) => Product.getById(id),

    getByCategory: (categoryId, excludeId) => 
        Product.getByCategory(categoryId, excludeId),


    create: (product) => {
        return Product.create(product);
    },

    update: (id, product) => {
        return Product.update(id, product);
    },

    delete: (id) => {
        return Product.delete(id);
    },


    search: (products, query) => {
        if (!query) return products;

        return products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    },

    sortByPrice: (products, order = "asc") => {
        return [...products].sort((a, b) =>
            order === "asc"
                ? a.price - b.price
                : b.price - a.price
        );
    },

    filterByCategory: (products, category) => {
        if (!category) return products;

        return products.filter(
            p => p.category.toLowerCase() === category.toLowerCase()
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

        const all = productsService.getAll();

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
