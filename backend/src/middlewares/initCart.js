const initCart = (req, res, next) => {

    if (!req.session.cart) {
        req.session.cart = [];
    }

    next();
};

module.exports = initCart;