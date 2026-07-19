const categoriesService = require("../../services/api/categoriesService");


const categoriesController = {


    list: (req, res) => {

        const categories = categoriesService.getAll();

        res.json(categories);

    }


};


module.exports = categoriesController;