const db = require('./database');

const rows = db.prepare(`
    SELECT id, name FROM categories
`).all();


const categoryMap = Object.fromEntries(
    rows.map(row => [row.name, row.id])
);


const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (
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

const result = db.prepare(`
    SELECT COUNT(*) as count FROM products
`).get();

