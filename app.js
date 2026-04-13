const express = require("express");
const app = express();
const PORT = 3000;

// configuracion de EJS
app.set("view engine", "ejs");

app.use(express.static("assets"));


//--------------Rutas-----------------//

app.get("/", (req, res) => {
    res.render("pages/home"), {title:"Home"};
});

app.get("/cart", (req, res) => {
    res.render("pages/cart"), {title:"Cart"};
});

app.get("/checkout", (req, res) => {
    res.render("pages/checkout"), {title:"Checkout"};
});

app.get("/menu", (req, res) => {
    res.render("pages/menu"), {title:"Menu"};
});

app.get("/product", (req, res) => {
    res.render("pages/product"), {title:"Product"};
});

app.get("/product2", (req, res) => {
    res.render("pages/product2"), {title:"Product2"};
});

app.get("/login", (req, res) => {
    res.render("pages/login"), {title:"Login"};
});

app.get("/register", (req, res) => {
    res.render("pages/register"), {title:"Register"};
});
//-------------------------------//

// levantar el servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});