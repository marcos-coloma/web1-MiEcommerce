const productsService = require("../services/productsService");
const categoriesService = require("../services/api/categoriesService");

const mainController = {

    home: (req, res) => {

        const suggested = productsService.getSuggested();
        const popularProducts = productsService.getPopular();
        const categories = categoriesService.getAll();

        res.render("pages/home", { 
            title: "Home",
            perfilLink: "/menu",
            suggested,
            popularProducts,
            categories
        });
    },

    menu: (req, res) => {
        res.render("pages/menu", {            
            title: "Menu"
        });
    }
};

module.exports = mainController;