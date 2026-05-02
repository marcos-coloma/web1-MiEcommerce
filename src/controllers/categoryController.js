const Product = require('../models/Product');
const productsService = require("../services/productsService");

const categoryController = {
    listByCategory: (req, res) => {

        const category = req.params.category;

        const allProducts = Product.getAll();

        const filteredProducts = allProducts.filter(
            p => p.category.toLowerCase() === category.toLowerCase()
        );

        console.log(category);
        console.log(filteredProducts);
        
        return res.render('pages/category', {
            title:"Category",
            category,
            products: filteredProducts
        });
    }
};

module.exports = categoryController;