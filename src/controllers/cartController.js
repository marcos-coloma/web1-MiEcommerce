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

        const productId = Number(req.params.id);

        const result = cartService.addProduct(req.session.cart, productId);

        if (result.error === "not_found") {
            return res.status(404).send("Producto no encontrado");
        }

        if (result.error === "no_stock") {
            return res.status(400).send("Producto sin stock");
        }

        res.redirect("/cart");
    },

    increase: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const productId = Number(req.params.id);

        cartService.increase(req.session.cart, productId);

        res.redirect("/cart");
    },

    decrease: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const productId = Number(req.params.id);

        req.session.cart = cartService.decrease(req.session.cart, productId);

        res.redirect("/cart");
    },

    remove: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const productId = Number(req.params.id);

        req.session.cart = cartService.remove(req.session.cart, productId);

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