
const cartController = {

    cart: (req, res) => {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        console.log(req.session.cart);

        res.send("Carrito inicializado");
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



    checkout: (req, res) => {
        res.render("pages/checkout", { 
            title: "Checkout",
            perfilLink: "/login"
        });
    }
};

module.exports = cartController;

