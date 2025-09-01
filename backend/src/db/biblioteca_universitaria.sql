-- DROP DATABASE biblioteca_universitaria;
CREATE DATABASE IF NOT EXISTS biblioteca_universitaria;
USE biblioteca_universitaria;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY auto_increment,
nombre CHAR(30),
tipo_usuario CHAR(30)
);

CREATE TABLE libro (
ISBN INT PRIMARY KEY,
titulo CHAR(50),
año_publicacion DATE,
categoria CHAR(50)
);

CREATE TABLE ejemplar (
id_ejemplar INT PRIMARY KEY auto_increment,
estado CHAR(30),
ISBN INT,
FOREIGN KEY (ISBN) REFERENCES libro(ISBN)
);

CREATE TABLE prestamo (
id_prestamo INT PRIMARY KEY auto_increment,
fecha_limite_dev DATE, 
fecha_entrega_dev DATE,
id_usuario INT,
id_ejemplar INT,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (id_ejemplar) REFERENCES ejemplar(id_ejemplar)
);

-- Inserción de datos
INSERT INTO usuario (nombre, tipo_usuario) VALUES
('Laura Gómez', 'Estudiante'),
('Carlos Ruiz', 'Profesor'),
('Ana Torres', 'Estudiante'),
('María Díaz', 'Profesor'),
('Luis Pérez', 'Estudiante'),
('Elena Ríos', 'Estudiante'),
('Javier Salas', 'Profesor'),
('Paula Méndez', 'Estudiante'),
('Ricardo Soto', 'Profesor'),
('Isabel Navarro', 'Estudiante');

INSERT INTO libro (ISBN, titulo, año_publicacion, categoria) VALUES
(1001, 'Cien Años de Soledad', '1967-06-05', 'Literatura'),
(1002, 'El Principito', '1943-04-06', 'Fábula'),
(1003, 'Fundamentos de Base de Datos', '2015-01-01', 'Académico'),
(1004, 'Clean Code', '2008-08-01', 'Programación'),
(1005, 'Introducción a la Física', '2010-09-15', 'Ciencia'),
(1006, '1984', '1949-06-08', 'Novela'),
(1007, 'Álgebra Lineal', '2012-03-10', 'Matemáticas'),
(1008, 'Don Quijote de la Mancha', '1605-01-16', 'Clásico'),
(1009, 'Python para Todos', '2020-05-20', 'Programación'),
(1010, 'Ética para Amador', '1996-10-01', 'Filosofía');

INSERT INTO ejemplar (estado, ISBN) VALUES
('Disponible', 1001),
('Prestado', 1001),
('Disponible', 1002),
('Disponible', 1003),
('Dañado', 1004),
('Disponible', 1005),
('Disponible', 1006),
('Prestado', 1007),
('Disponible', 1008),
('Disponible', 1009);

INSERT INTO prestamo (fecha_limite_dev, fecha_entrega_dev, id_usuario, id_ejemplar) VALUES
('2025-09-10', NULL, 1, 2),
('2025-09-12', '2025-09-11', 2, 3),
('2025-09-14', NULL, 3, 4),
('2025-09-15', NULL, 4, 5),
('2025-09-16', NULL, 5, 6),
('2025-09-17', NULL, 6, 7),
('2025-09-18', NULL, 7, 8),
('2025-09-19', NULL, 8, 9),
('2025-09-20', NULL, 9, 10),
('2025-09-21', NULL, 10, 1);

SELECT * FROM usuario;
SELECT * FROM libro;
SELECT * FROM ejemplar;
SELECT * FROM prestamo;