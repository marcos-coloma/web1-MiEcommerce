const categoriesService = require("../../services/api/categoriesService");

const categoriesController = {

    // GET /api/categories
    list: (req, res) => {
        const categories = categoriesService.getAll();
        res.json(categories);
    },

    // GET /api/categories/:id
    detail: (req, res) => {
        const id = parseInt(req.params.id);
        const category = categoriesService.getById(id);

        if (!category) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }

        res.json(category);
    },

    // POST /api/categories
    create: (req, res) => {
        const { name, icon } = req.body;

        if (!name || !icon) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const newCategory = categoriesService.create({ name, icon });

        res.status(201).json(newCategory);
    },

    // PUT /api/categories/:id
    update: (req, res) => {
        const id = parseInt(req.params.id);
        const { name, icon } = req.body;

        const updatedCategory = categoriesService.update(id, { name, icon });

        if (!updatedCategory) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }

        res.json(updatedCategory);
    },

    // DELETE /api/categories/:id
    delete: (req, res) => {
        const id = parseInt(req.params.id);

        const deleted = categoriesService.delete(id);

        if (!deleted) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }

        res.json({ message: "Categoría eliminada" });
    }
};

module.exports = categoriesController;