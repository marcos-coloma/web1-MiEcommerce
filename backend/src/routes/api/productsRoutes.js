const express = require('express');
const router = express.Router();

const productsController = require("../../controllers/api/productsController");


// GET todos
router.get("/", productsController.list);

// GET por id
router.get("/:id", productsController.detail);

// CREAR
router.post("/", productsController.create);

// EDITAR
router.put("/:id/edit", productsController.update);
router.put("/:id", productsController.update);

// ELIMINAR
router.delete("/:id/delete", productsController.delete);
router.delete("/:id", productsController.delete);


module.exports = router;
