const express = require("express");
const cors = require("cors");

const prestamosRoutes = require("./routes/prestamos.routes");
const librosRoutes = require("./routes/libros.routes");
const usuariosRoutes = require("./routes/usuarios.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/prestamos", prestamosRoutes);
app.use("/api/libros", librosRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;