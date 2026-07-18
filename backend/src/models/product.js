const db = require("../../db/database");

const Product = {

    //------------LECTURA------------

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
    },


    //------------MODIFICACION------------

    create: (product) => {
        return db.prepare(`
            INSERT INTO products (
                name,
                price,
                img,
                description,
                store_name,
                store_profile_url,
                popular,
                stock,
                category_id
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            product.name,
            product.price,
            product.img,
            product.description,
            product.store_name || "MiEcommerce",
            product.store_profile_url || "",
            product.popular,
            product.stock,
            product.category_id
        );
    },

    update: (id, product) => {
        return db.prepare(`
            UPDATE products
            SET
                name = ?,
                price = ?,
                img = ?,
                description = ?,
                store_name = ?,
                store_profile_url = ?,
                popular = ?,
                stock = ?,
                category_id = ?
            WHERE id = ?
        `).run(
            product.name,
            product.price,
            product.img,
            product.description,
            product.store_name || "MiEcommerce",
            product.store_profile_url || "",
            product.popular,
            product.stock,
            product.category_id,
            id
        );
    },

    delete: (id) => {
        return db.prepare(`
            DELETE FROM products
            WHERE id = ?
        `).run(id);
    }

};

module.exports = Product;
