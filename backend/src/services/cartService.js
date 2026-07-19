const Product = require("../models/Product");

const cartService = {

    getDetailedCart: (cart) => {
        return cart.map(item => {
            const product = Product.getById(Number(item.productId));

            if (!product) return null;

            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: item.quantity,
                subtotal: product.price * item.quantity
            };
        }).filter(Boolean);
    },

    getTotal: (cartDetailed) => {
        return cartDetailed.reduce((acc, item) => acc + item.subtotal, 0);
    },

    addProduct: (cart, productId) => {
        const id = Number(productId);
        const product = Product.getById(id);

        if (!product) return { error: "not_found" };
        if (product.stock <= 0) return { error: "no_stock" };

        const existingProduct = cart.find(p => p.productId === id);

        if (existingProduct) {
            existingProduct.quantity++;

            if (existingProduct.quantity > product.stock) {
                existingProduct.quantity = product.stock;
            }
        } else {
            cart.push({
                productId: id,
                quantity: 1
            });
        }

        return { cart };
    },

    increase: (cart, productId) => {
        const id = Number(productId);
        const item = cart.find(p => p.productId === id);
        const product = Product.getById(id);

        if (item && product && item.quantity < product.stock) {
            item.quantity++;
        }
    },

    decrease: (cart, productId) => {
        const id = Number(productId);
        const item = cart.find(p => p.productId === id);

        if (item) {
            item.quantity--;

            if (item.quantity <= 0) {
                return cart.filter(p => p.productId !== id);
            }
        }

        return cart;
    },

    remove: (cart, productId) => {
        const id = Number(productId);
        return cart.filter(p => p.productId !== id);
    }

};

module.exports = cartService;