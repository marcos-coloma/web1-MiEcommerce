const Product = require("../models/Product");

const cartController = {

    cart: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        console.log(req.session.cart);

        const cartDetailed = req.session.cart.map(item => {
        const product = Product.getById(item.productId);

            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: item.quantity,
                subtotal: product.price * item.quantity
            };
        });

        console.log(cartDetailed);

        const total = cartDetailed.reduce((acc, item) => acc + item.subtotal, 0);

        res.render("pages/cart", { 
            cart: cartDetailed,
            total: total
        });
    },

    add: (req, res) => {
        
        if (!req.session.cart) {
            req.session.cart = [];
        }

        const productId = Number(req.params.id);
        const product = Product.getById(productId);

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        if (product.stock === 0) {
            return res.status(400).send("Producto sin stock");
        }


        const existingProduct = req.session.cart.find(
            p => p.productId === productId
        );

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            req.session.cart.push({
                productId: productId,
                quantity: 1
            });
        }


        res.redirect("/cart");
    },

    increase: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }
        const productId = Number(req.params.id);

        const item = req.session.cart.find(p => p.productId === productId);

        if (item) {
            item.quantity++;
        }

        res.redirect("/cart");
    },

    decrease: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const productId = Number(req.params.id);

        const item = req.session.cart.find(p => p.productId === productId);

        if (item) {
            item.quantity--;

            if (item.quantity <= 0) {
                req.session.cart = req.session.cart.filter(
                    p => p.productId !== productId
                );
            }
        }

        res.redirect("/cart");
    },

    remove: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }
        const productId = Number(req.params.id);

        req.session.cart = req.session.cart.filter(
            p => p.productId !== productId
        );

        res.redirect("/cart");
    },



    checkout: (req, res) => {

        if (!req.session.cart || req.session.cart.length === 0) {
            return res.redirect("/cart");
        }

        res.render("pages/checkout", { 
            title: "Checkout",
            perfilLink: "/login"
        });
    }
};

module.exports = cartController;

