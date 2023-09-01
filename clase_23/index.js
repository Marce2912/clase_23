require('dotenv').config();
const express = require('express');

const userController = require('./controllers/userController');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/users', userController.getAll);
app.post('/user', userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.deleteUser);

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});


// instala
// npm i mongoose
// npm i express
// npm i dotenv
// npm i nodemon -D


//copiar carpeta 23
//instalar dependencias con el comando "npm install"
//crear el scheama de producto
//crear el controlador de producto
//crear los endpoints de producto
//tomar de referencia el codigo de usuario


//tarea
// Actividad
// Crear un enpoint GET /products
// Crear un enpoint POST /product
// Crear un Schema para Product
// Crear un modelo para Product