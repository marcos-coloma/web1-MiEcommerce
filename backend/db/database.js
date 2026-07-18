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

const productColumns = db.prepare("PRAGMA table_info(products)").all();
const productColumnNames = productColumns.map(column => column.name);

if (!productColumnNames.includes("store_name")) {
    db.exec("ALTER TABLE products ADD COLUMN store_name TEXT NOT NULL DEFAULT 'MiEcommerce'");
}

if (!productColumnNames.includes("store_profile_url")) {
    db.exec("ALTER TABLE products ADD COLUMN store_profile_url TEXT NOT NULL DEFAULT ''");
}

db.prepare(`
    UPDATE products
    SET store_name = 'MiEcommerce'
    WHERE store_name IS NULL OR store_name = ''
`).run();

// Exportar la conexión
module.exports = db;
