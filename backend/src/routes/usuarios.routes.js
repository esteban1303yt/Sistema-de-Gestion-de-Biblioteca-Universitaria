const express = require("express");
const { listarUsuarios, crearUsuario } = require("../controllers/usuarios.controller.js");

const router = express.Router();

router.get("/", listarUsuarios);
router.post("/", crearUsuario);

module.exports = router;