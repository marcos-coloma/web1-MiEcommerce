const products = require("../data/products");
const stockMap = {};

const Product = {
    getAll: () => {
        return products.map(p => {
            if (stockMap[p.id] === undefined) {
                stockMap[p.id] = Math.random() > 0.9 ? 0 : Math.floor(Math.random() * 10) + 1;
            }

            return {
                ...p,
                stock: stockMap[p.id]
            };
        });
    },

    getById: (id) => {
        const all = Product.getAll();
        return all.find(p => p.id === Number(id));
    }
};

module.exports = Product;