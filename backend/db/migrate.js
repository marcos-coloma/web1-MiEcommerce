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
    store_name TEXT,
    store_profile_url TEXT,
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

const getStoreByCategory = (category) => {
    const stores = {
        electronica: {
            name: 'Mercado Libre',
            url: 'https://www.mercadolibre.com.ar'
        },
        alimentos: {
            name: 'Carrefour',
            url: 'https://www.carrefour.com.ar'
        },
        bebidas: {
            name: 'Coto',
            url: 'https://www.cotodigital3.com.ar'
        },
        indumentaria: {
            name: 'Dafiti',
            url: 'https://www.dafiti.com.ar'
        },
        juegos: {
            name: 'Amazon',
            url: 'https://www.amazon.com'
        },
        automotor: {
            name: 'Norauto',
            url: 'https://www.norauto.com.ar'
        },
        hogar: {
            name: 'Sodimac',
            url: 'https://www.sodimac.com.ar'
        },
        otros: {
            name: 'Easy',
            url: 'https://www.easy.com.ar'
        }
    };

    return stores[category] || {
        name: 'Mercado Libre',
        url: 'https://www.mercadolibre.com.ar'
    };
};


const insertProduct = db.prepare(`
    INSERT INTO products (
        name, price, img, description, store_name, store_profile_url, popular, stock, category_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

products.forEach(p => {
    const store = getStoreByCategory(p.category);

    insertProduct.run(
        p.name,
        p.price,
        p.img,
        p.description,
        p.store_name || store.name,
        p.store_profile_url || store.url,
        p.popular ? 1 : 0,
        Math.random() < 0.1 ? 0 : Math.floor(Math.random() * 10) + 1,
        categoryMap[p.category]
    );
});

