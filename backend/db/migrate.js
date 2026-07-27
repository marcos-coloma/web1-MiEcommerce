const db = require('./database');

const migrate = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            icon TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            price REAL NOT NULL,
            description TEXT NOT NULL,
            img TEXT NOT NULL,
            store_name TEXT NOT NULL DEFAULT 'MiEcommerce',
            store_profile_url TEXT NOT NULL DEFAULT '',
            popular INTEGER NOT NULL DEFAULT 0,
            category_id INTEGER NOT NULL,
            stock INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        );
    `);

    console.log("✔ Migración ejecutada");
};

migrate();