const pool = require("../config/db.js");

// Listar todos los usuarios
const listarUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuario");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un usuario nuevo
const crearUsuario = async (req, res) => {
  try {
    const { nombre, tipo_usuario } = req.body;
    const [result] = await pool.query(
      "INSERT INTO usuario (nombre, tipo_usuario) VALUES (?, ?)",
      [nombre, tipo_usuario]
    );
    res.json({ id: result.insertId, nombre, tipo_usuario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { listarUsuarios, crearUsuario };