const express = require("express");
const app = express();

// configurar EJS
app.set("view engine", "ejs");

// ruta basica
app.get("/", (req, res) => {
    res.render("index");
});

// levantar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});