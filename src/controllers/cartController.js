
const cartController = {

    cart: (req, res) => {
        res.render("pages/cart", { 
            title: "Cart",
            perfilLink: "/login"
        });
    },

    checkout: (req, res) => {
        res.render("pages/checkout", { 
            title: "Checkout",
            perfilLink: "/login"
        });
    }
};

module.exports = cartController;

