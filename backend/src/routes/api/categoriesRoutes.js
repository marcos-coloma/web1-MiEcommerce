const express = require("express");
const router = express.Router();

const categoriesController = require("../../controllers/api/categoriesController");

router.get(
    "/",
    categoriesController.list
);

router.get(
    "/:id",
    categoriesController.detail
);

router.post(
    "/",
    categoriesController.create
);

router.put(
    "/:id",
    categoriesController.update
);

router.delete(
    "/:id",
    categoriesController.delete
);


module.exports = router;