const session = require("express-session");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//  MIDDLEWARES BASE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  SESSION
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true
}));

//  STATIC
app.use(express.static("public"));

// CONFIG EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// IMPORTAR RUTAS
const mainRoutes = require("./src/routes/mainRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");

//  RUTAS
app.use("/", mainRoutes);
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);

app.use((req, res, next) => {
    res.status(404).render("pages/404");
});

// INICIAR SERVIDOR

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});