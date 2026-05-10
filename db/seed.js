const db = require('./database');
const products = require('../src/data/products');

const categories = new Set(products.map(p => p.category));

const insertCategory = db.prepare(`
    INSERT OR IGNORE INTO categories (name)
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
        Math.floor(Math.random() * 10) + 1,
        categoryMap[p.category]
    );
});