const express = require("express");
const { prestamosActivos, prestamosPorUsuario } = require("../controllers/prestamos.controller.js");

const router = express.Router();

router.get("/activos", prestamosActivos);
router.get("/por-usuario", prestamosPorUsuario);

module.exports = router;