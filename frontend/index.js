const API_URL = "http://localhost:3000/api";

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    const data = await res.json();
    mostrarTabla(data);
  } catch (err) {
    document.getElementById("resultado").innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

function mostrarTabla(data) {
  if (!Array.isArray(data) || data.length === 0) {
    document.getElementById("resultado").innerHTML = "<p>No hay datos disponibles.</p>";
    return;
  }

  let tabla = "<table><thead><tr>";
  Object.keys(data[0]).forEach(col => {
    tabla += `<th>${col}</th>`;
  });
  tabla += "</tr></thead><tbody>";

  data.forEach(fila => {
    tabla += "<tr>";
    Object.values(fila).forEach(valor => {
      tabla += `<td>${valor}</td>`;
    });
    tabla += "</tr>";
  });

  tabla += "</tbody></table>";

  document.getElementById("resultado").innerHTML = tabla;
}

// Funciones para cada botón
function cargarUsuarios() {
  fetchData("usuarios");
}

function cargarLibrosDisponibles() {
  fetchData("libros/disponibles");
}

function cargarLibrosPrestados() {
  fetchData("libros/prestados");
}

function cargarPrestamosActivos() {
  fetchData("prestamos/activos");
}

function cargarPrestamosPorUsuario() {
  fetchData("prestamos/por-usuario");
}