const products = require("../data/products");

const cartController = {

    cart: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        console.log(req.session.cart);

        const cartDetailed = req.session.cart.map(item => {
            const product = products.find(p => p.id === item.productId);

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
        
        const productId = Number(req.params.id);

        if (!req.session.cart) {
            req.session.cart = [];
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

        console.log(req.session.cart);

        res.redirect("/cart");
    },

    increase: (req, res) => {
        const productId = Number(req.params.id);

        const item = req.session.cart.find(p => p.productId === productId);

        if (item) {
            item.quantity++;
        }

        res.redirect("/cart");
    },

    decrease: (req, res) => {
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

