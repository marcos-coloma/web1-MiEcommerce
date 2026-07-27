const db = require("../../db/database");

const Category = {

    // Obtener todas
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

    // Obtener por ID
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

    // Crear
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

    // Actualizar
    update: (id, { name, icon }) => {
        db.prepare(`
            UPDATE categories
            SET name = ?, icon = ?
            WHERE id = ?
        `).run(name, icon, id);

        return {
            id,
            name,
            icon
        };
    },

    // Eliminar
    delete: (id) => {
        return db.prepare(`
            DELETE FROM categories
            WHERE id = ?
        `).run(id);
    }

};

module.exports = Category;