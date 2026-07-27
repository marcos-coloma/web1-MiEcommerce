const db = require("../../db/database");
const normalizeId = require("../helpers/normalizeId");

const productFields = `
    products.*,
    categories.name AS category,
    categories.id AS category_id
`;

const productJoin = `
    FROM products
    JOIN categories ON products.category_id = categories.id
`;

const Product = {

    //------------LECTURA------------

    getAll: () => {
        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
        `).all();
    },


    getById: (id) => {

        const productId = normalizeId(id);

        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
            WHERE products.id = ?
        `).get(productId);
    },


    getByCategory: (categoryId, excludeId) => {

        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
            WHERE products.category_id = ?
            AND products.id != ?
        `).all(categoryId, excludeId);
    },


    search: (query) => {

        if (!query) return [];

        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
            WHERE LOWER(products.name) LIKE LOWER(?)
        `).all(`%${query}%`);
    },


    getPopular: () => {

        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
            WHERE popular = 1
            ORDER BY RANDOM()
            LIMIT 10
        `).all();
    },


    getRandom: (limit = 5) => {

        return db.prepare(`
            SELECT 
                ${productFields}
            ${productJoin}
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

        const productId = normalizeId(id);

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
            productId
        );
    },


    delete: (id) => {

        const productId = normalizeId(id);

        return db.prepare(`
            DELETE FROM products
            WHERE id = ?
        `).run(productId);
    }

};

module.exports = Product;