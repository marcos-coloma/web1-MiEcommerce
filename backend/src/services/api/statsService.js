const Product = require('../../models/Product');
const Category = require('../../models/Category');

const statsService = {
    getStats: () => {
        const totalProducts = Product.count();
        const totalCategories = Category.count();

        return {
            totalProducts,
            totalCategories
        };
    }
};

module.exports = statsService;