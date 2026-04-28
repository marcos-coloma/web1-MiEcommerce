const productController = {

    product: (req, res) => {
        res.render("pages/product", { 
            title: "Product",
            perfilLink: "/login"
        });
    },

    product2: (req, res) => {
        res.render("pages/product2", { 
            title: "Product2",
            perfilLink: "/login"
        });
    }

};

module.exports = productController;