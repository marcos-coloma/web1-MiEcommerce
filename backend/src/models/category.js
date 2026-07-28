const db = require("../../db/database");

const Category = {

    getAll: () => {
        return db.prepare(`
            SELECT
                id,
                name,
                icon
            FROM categories
            ORDER BY name ASC
        `).all();
    },


    getById: (id) => {
        return db.prepare(`
            SELECT
                id,
                name,
                icon
            FROM categories
            WHERE id = ?
        `).get(id);
    },

    count: () => {
        return db.prepare(`
            SELECT COUNT(*) AS total
            FROM categories
        `).get().total;
    },


    create: ({ name, icon }) => {
        const result = db.prepare(`
            INSERT INTO categories (name, icon)
            VALUES (?, ?)
        `).run(name, icon);

        return {
            id: result.lastInsertRowid,
            name,
            icon
        };
    },


    update: (id, { name, icon }) => {
        return db.prepare(`
            UPDATE categories
            SET name = ?, icon = ?
            WHERE id = ?
        `).run(name, icon, id);
    },


    delete: (id) => {
        return db.prepare(`
            DELETE FROM categories
            WHERE id = ?
        `).run(id);
    }

};

module.exports = Category;