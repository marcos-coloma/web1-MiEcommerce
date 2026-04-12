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
//-------------------------------//

// levantar el servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});