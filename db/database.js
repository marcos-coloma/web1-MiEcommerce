const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// Ruta al archivo .db
const dbPath = path.join(__dirname, 'ecommerce.db');

// Crear o abrir la base de datos
const db = new Database(dbPath);

// Leer el schema.sql
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');

// Ejecutar el schema
db.exec(schema);

// Exportar la conexión
module.exports = db;