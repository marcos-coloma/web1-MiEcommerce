const express = require("express");
const app = express();
const PORT = 3000;

// configuracion de EJS
app.set("view engine", "ejs");

app.use(express.static("assets"));


//--------------Rutas-----------------//

app.get("/", (req, res) => {
    res.render("pages/home");
});

app.get("/cart", (req, res) => {
    res.render("pages/cart");
});

app.get("/menu", (req, res) => {
    res.render("pages/menu");
});

app.get("/login", (req, res) => {
    res.render("pages/login");
});

app.get("/register", (req, res) => {
    res.render("pages/register");
});
//-------------------------------//

// levantar el servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});