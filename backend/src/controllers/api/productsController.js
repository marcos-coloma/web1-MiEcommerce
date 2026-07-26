const productsService = require("../../services/productsService");

const productsApiController = {

    // GET /api/products
    list: (req, res) => {
        const products = productsService.getAll();

        res.json(products);
    },


    // GET /api/products/:id
    detail: (req, res) => {
        const { id } = req.params;

        const product = productsService.getById(id);

    if (!product) {
        return res.status(404).json({
            error: "Producto no encontrado"
        });
    }

        res.json(product);
    },


    // POST /api/products
    create: (req, res) => {
        const product = req.body;

        const result = productsService.create(product);

        res.status(201).json({
            message: "Producto creado",
            id: result.lastInsertRowid
        });
    },


    // PUT /api/products/:id
    update: (req, res) => {
        const { id } = req.params;
        const product = req.body;

        const result = productsService.update(id, product);

        if (result.changes === 0) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.json({
            message: "Producto actualizado"
        });
    },


    // DELETE /api/products/:id
    delete: (req, res) => {
        const { id } = req.params;

        const result = productsService.delete(id);

        if (result.changes === 0) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.json({
            message: "Producto eliminado"
        });
    }

};

module.exports = productsApiController;