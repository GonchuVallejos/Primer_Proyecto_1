--Crear Base de Datos
CREATE DATABASE abm_ga;

--Usar Base de Datos
USE abm_ga;

--Crear Tablas
CREATE TABLE usuarios (
  ID_Usuario int NOT NULL,
  Nombre varchar(30) NOT NULL,
  Apellido varchar(30) NOT NULL,
  DNI varchar(8) NOT NULL,
  Edad int(11) NOT NULL,
  Email varchar(50) NOT NULL,
  Usuario varchar(30) NOT NULL,
  Contraseña varchar(20) NOT NULL,
  PRIMARY KEY(ID_Usuario)
);



