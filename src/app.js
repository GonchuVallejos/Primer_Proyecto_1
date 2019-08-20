const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

//Importing routes
const customerRoutes = require('./routes/customer');

//Settings
app.set('port', 3000); //Escucha en el puerto asignado por el sistema o en el 3000 en su defecto
app.set('view engine', 'ejs'); //Configura el motor de plantilla que es "ejs"
app.set('views', path.join(__dirname, 'views')); //Path une directorios| __dirname da la direccion desde SO y le concatena views

//Middlewares
app.use(morgan('dev')); //Muestra que llega desde que el usuario ingresa a la pagina
app.use(myConnection(mysql, {
    host: 'localhost',
    user: process.env.BD_USER,
    password:  process.env.BD_PASS,
    port: process.env.BD_PUERTO,
    database: process.env.BD_TEST
    }, 'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', customerRoutes);

//Static Fields
app.use(express.static(path.join(__dirname, 'public')));

//Starting the Server
app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`));