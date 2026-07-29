const defaultLocals = (req, res, next) => {
    res.locals.title = "MiEcommerce";
    res.locals.perfilLink = "/login";
    res.locals.mainClass = '';

    next();
};

module.exports = defaultLocals;