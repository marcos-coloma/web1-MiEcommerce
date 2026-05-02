// src/services/cartService.js

const Product = require("../models/Product");

const cartService = {

    getDetailedCart: (cart) => {
        return cart.map(item => {
            const product = Product.getById(item.productId);

            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: item.quantity,
                subtotal: product.price * item.quantity
            };
        });
    },

    getTotal: (cartDetailed) => {
        return cartDetailed.reduce((acc, item) => acc + item.subtotal, 0);
    },

    addProduct: (cart, productId) => {
        const product = Product.getById(productId);

        if (!product) return { error: "not_found" };
        if (product.stock === 0) return { error: "no_stock" };

        const existingProduct = cart.find(p => p.productId === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                productId,
                quantity: 1
            });
        }

        return { cart };
    },

    increase: (cart, productId) => {
        const item = cart.find(p => p.productId === productId);
        if (item) item.quantity++;
    },

    decrease: (cart, productId) => {
        const item = cart.find(p => p.productId === productId);

        if (item) {
            item.quantity--;

            if (item.quantity <= 0) {
                return cart.filter(p => p.productId !== productId);
            }
        }

        return cart;
    },

    remove: (cart, productId) => {
        return cart.filter(p => p.productId !== productId);
    }
};

module.exports = cartService;