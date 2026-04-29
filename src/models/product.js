const products = require("../data/products");

const Product = {
    getAll: () => products,

    getById: (id) => {
        return products.find(p => p.id === Number(id));
    }
};

module.exports = Product;