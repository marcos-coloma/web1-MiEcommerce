const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//--------------Rutas-----------------//

const mainRoutes = require("./src/routes/mainRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");


//-----configuracion de EJS------//

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static("assets"));


//---------Uso de rutas----------//

app.use("/", mainRoutes);
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);


//---Inicializacion del Servidor---//

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});