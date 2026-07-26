const express = require("express");
const session = require("express-session");
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");



const app = express();
const PORT = 3000;

// SECURITY
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false
}));

// CORS
app.use(cors({
    origin: "http://localhost:5173"
}));

// PARSERS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  SESSION
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true
}));

// CART COUNT
app.use((req, res, next) => {
    const cart = req.session.cart || [];
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    res.locals.cartCount = cartCount;

    next();
});


//  STATIC
app.use(express.static(path.join(__dirname, "public")));

// CONFIG EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// CONFIG LAYOUTS
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// DEFAULT
app.use((req, res, next) => {
    res.locals.title = "MiEcommerce";
    res.locals.perfilLink = "/login";
    res.locals.mainClass = '';

    next();
});


// IMPORTAR RUTAS
const apiProductsRoutes = require('./src/routes/api/productsRoutes');
const apiCategoriesRoutes = require('./src/routes/api/categoriesRoutes');
const apiStatsRoutes = require('./src/routes/api/statsRoutes');

const mainRoutes = require("./src/routes/mainRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productDetailsRoutes = require("./src/routes/productDetailsRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const productsRoutes = require('./src/routes/productsRoutes');

// API
app.use('/api/products', apiProductsRoutes);
app.use('/api/categories', apiCategoriesRoutes);
app.use('/api/stats', apiStatsRoutes);

// WEB SSR
app.use("/", mainRoutes);
app.use("/", authRoutes);
app.use("/", productDetailsRoutes);
app.use("/", cartRoutes);
app.use("/", productsRoutes);


const notFound = require('./src/middlewares/notFound');
const errorHandler = require('./src/middlewares/errorHandler');

app.use(notFound);
app.use(errorHandler);


// INICIAR SERVIDOR

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});