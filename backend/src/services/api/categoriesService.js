const Category = require("../../models/Category");


const categoriesService = {
    getAll: () => {
        return Category.getAll();
    }
};


module.exports = categoriesService;