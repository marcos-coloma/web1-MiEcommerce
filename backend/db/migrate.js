const db = require('./database');
const products = require('../products');

db.exec(`
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
`);

db.exec(`
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    img TEXT,
    description TEXT,
    popular INTEGER,
    stock INTEGER,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
`);

const categories = new Set(products.map(p => p.category));

const insertCategory = db.prepare(`
    INSERT INTO categories (name)
    VALUES (?)
`);

[...categories].forEach(cat => insertCategory.run(cat));


const rows = db.prepare(`
    SELECT id, name FROM categories
`).all();


const categoryMap = Object.fromEntries(
    rows.map(row => [row.name, row.id])
);


const insertProduct = db.prepare(`
    INSERT INTO products (
        name, price, img, description, popular, stock, category_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
`);

products.forEach(p => {
    insertProduct.run(
        p.name,
        p.price,
        p.img,
        p.description,
        p.popular ? 1 : 0,
        Math.random() < 0.1 ? 0 : Math.floor(Math.random() * 10) + 1,
        categoryMap[p.category]
    );
});

