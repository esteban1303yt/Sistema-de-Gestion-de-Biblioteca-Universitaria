const pool = require("../config/db.js");

// Préstamos activos (sin devolución real)
const prestamosActivos = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT p.id_prestamo, u.nombre AS usuario, l.titulo, p.fecha_limite_dev
      FROM prestamo p
      JOIN usuario u ON p.id_usuario = u.id_usuario
      JOIN ejemplar e ON p.id_ejemplar = e.id_ejemplar
      JOIN libro l ON e.ISBN = l.ISBN
      WHERE p.fecha_entrega_dev IS NULL
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cantidad de préstamos por usuario
const prestamosPorUsuario = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT u.nombre, COUNT(p.id_prestamo) AS total_prestamos
      FROM usuario u
      LEFT JOIN prestamo p ON u.id_usuario = p.id_usuario
      GROUP BY u.id_usuario
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { prestamosActivos, prestamosPorUsuario };