const cartService = require("../services/cartService");

const cartController = {

    cart: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const cartDetailed = cartService.getDetailedCart(req.session.cart);
        const total = cartService.getTotal(cartDetailed);

        res.render("pages/Cart", { 
            title: "cart",
            cart: cartDetailed,
            total
        });
    },

    add: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const product = req.product;

        const result = cartService.addProduct(req.session.cart, product.id);

        if (result.error === "no_stock") {
            return res.status(400).send("Producto sin stock");
        }

        res.redirect("/cart");
    },

    increase: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const product = req.product;

        cartService.increase(req.session.cart, product.id);

        res.redirect("/cart");
    },

    decrease: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const product = req.product;

        req.session.cart = cartService.decrease(req.session.cart, product.id);

        res.redirect("/cart");
    },

    remove: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const product = req.product;

        req.session.cart = cartService.remove(req.session.cart, product.id);

        res.redirect("/cart");
    },

    checkout: (req, res) => {

        if (!req.session.cart || req.session.cart.length === 0) {
            return res.redirect("/cart");
        }

        res.render("pages/checkout", { 
            title: "Checkout",
            perfilLink: "/login",
            mainClass: "checkout-container"
        });
    }
};

module.exports = cartController;