//Declaración de variables globales


// ===============================
// Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;


// ===============================
// Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===============================
// Base de Datos
// ===============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = 'mongodb+srv://fabro:uf8p5ceKzjZzhzve@cluster0-ampvl.mongodb.net/cafe';

}

process.env.URLDB = urlDB;