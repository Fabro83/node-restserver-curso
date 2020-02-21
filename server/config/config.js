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
// Vencimiento del Token
// ===============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// ===============================
// SEED de autenticación
// ===============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===============================
// Base de Datos
// ===============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = process.env.MONGO_URI;

}

process.env.URLDB = urlDB;


// ===============================
// Google Cliente ID
// ===============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '341671801932-r6bdad0qao0jv5c7dgcoblfqmj245p29.apps.googleusercontent.com';