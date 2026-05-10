const db = require("../../db/database");

const Product = {
    getAll: () => {
        return db.prepare(`
            SELECT products.*, categories.name as category
            FROM products
            JOIN categories ON products.category_id = categories.id
        `).all();
    },

    getById: (id) => {
        return db.prepare(`
            SELECT products.*, categories.name as category
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE products.id = ?
        `).get(Number(id));
    }
};

module.exports = Product;