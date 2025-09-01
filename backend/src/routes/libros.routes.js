const express = require("express");
const { librosDisponibles, librosPrestados } = require("../controllers/libros.controller.js");

const router = express.Router();

router.get("/disponibles", librosDisponibles);
router.get("/prestados", librosPrestados);

module.exports = router;