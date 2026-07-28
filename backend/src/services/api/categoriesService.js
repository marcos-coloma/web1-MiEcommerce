const Category = require("../../models/Category");

const categoriesService = {

    // Obtener todas
    getAll: () => {
        return Category.getAll();
    },

    // Obtener por ID
    getById: (id) => {
        return Category.getById(id);
    },

    // Crear
    create: ({ name, icon }) => {
        return Category.create({ name, icon });
    },

    // Actualizar
    update: (id, { name, icon }) => {
        const existingCategory = Category.getById(id);

        if (!existingCategory) {
            return null;
        }

        return Category.update(id, { name, icon });
    },

    // Eliminar
    delete: (id) => {
        const existingCategory = Category.getById(id);

        if (!existingCategory) {
            return false;
        }

        Category.delete(id);
        return true;
    }
};

module.exports = categoriesService;