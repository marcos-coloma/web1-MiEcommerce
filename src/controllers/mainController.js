const mainController = {

    home: (req, res) => {
        res.render("pages/home", { 
            title: "Home",
            perfilLink: "/menu"
        });
    },

    menu: (req, res) => {
        res.render("pages/menu", { 
            title: "Menu"
        });
    }
};

module.exports = mainController;

