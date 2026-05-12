const db = require("../../db/database");

const Product = {

    getAll: () => {
        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
        `).all();
    },

    getById: (id) => {
        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE products.id = ?
        `).get(Number(id));
    },

    getByCategory: (categoryId, excludeId) => {
        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE products.category_id = ?
            AND products.id != ?
        `).all(categoryId, excludeId);
    },

    search: (query) => {
        if (!query) return [];

        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE LOWER(products.name) LIKE LOWER(?)
        `).all(`%${query}%`);
    },

    getPopular: () => {
        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE popular = 1
            ORDER BY RANDOM()
            LIMIT 10
        `).all();
    },

    getRandom: (limit = 5) => {
        return db.prepare(`
            SELECT 
                products.*,
                categories.name AS category,
                categories.id AS category_id
            FROM products
            JOIN categories ON products.category_id = categories.id
            ORDER BY RANDOM()
            LIMIT ?
        `).all(limit);
    }

};

module.exports = Product;