const express = require("express");
const app = express();
const PORT = 3000;

// configurar EJS
app.set("view engine", "ejs");

app.use(express.static("assets"));

// ruta home
app.get("/", (req, res) => {
    res.render("pages/home");
});

// levantar servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});