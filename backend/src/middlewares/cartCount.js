const cartCount = (req, res, next) => {
    const cart = req.session.cart || [];
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    res.locals.cartCount = cartCount;

    next();
}

module.exports = cartCount;