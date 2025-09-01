const pool = require("../config/db.js");

// Libros disponibles por categoría
const librosDisponibles = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT l.categoria, l.titulo, e.id_ejemplar
      FROM libro l
      JOIN ejemplar e ON l.ISBN = e.ISBN
      WHERE e.estado = 'Disponible'
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Libros prestados actualmente
const librosPrestados = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT l.titulo, e.id_ejemplar, u.nombre AS usuario
      FROM prestamo p
      JOIN ejemplar e ON p.id_ejemplar = e.id_ejemplar
      JOIN libro l ON e.ISBN = l.ISBN
      JOIN usuario u ON p.id_usuario = u.id_usuario
      WHERE p.fecha_entrega_dev IS NULL
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { librosDisponibles, librosPrestados };