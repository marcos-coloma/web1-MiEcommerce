const productsService = require("../services/productsService");

const mainController = {

    home: (req, res) => {

        const suggested = productsService.getSuggested();
        const popularProducts = productsService.getPopular();

        res.render("pages/home", { 
            title: "Home",
            perfilLink: "/menu",
            suggested,
            popularProducts,
        });
    },

    menu: (req, res) => {
        res.render("pages/menu", {            
            layout: false, 
            title: "Menu"
        });
    }
};

module.exports = mainController;