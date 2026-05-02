// src/services/productsServices.js

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

    getById: (id) => {
        return Product.getById(id);
    },

    getRelated: (product) => {
        const products = Product.getAll();

        if (!product || !product.category) return [];

        return products
            .filter(p => 
                p.category === product.category && p.id != product.id
            )
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
    }
}



module.exports = productsService;