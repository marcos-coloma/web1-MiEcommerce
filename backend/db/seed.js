const db = require('./database');
const products = require('./seed/products');
const categoriesData = require('./seed/categories');

const seed = () => {

    // limpiar en orden correcto
    db.prepare("DELETE FROM products").run();
    db.prepare("DELETE FROM categories").run();

    // insertar categorías
    const insertCategory = db.prepare(`
        INSERT INTO categories (name, icon)
        VALUES (?, ?)
    `);

    categoriesData.forEach(cat => {
        insertCategory.run(cat.name, cat.icon);
    });

    // obtener IDs reales
    const rows = db.prepare(`
        SELECT id, name FROM categories
    `).all();

    const categoryMap = Object.fromEntries(
        rows.map(row => [row.name, row.id])
    );

    // insertar productos
    const insertProduct = db.prepare(`
        INSERT INTO products (
            name, price, img, description,
            store_name, store_profile_url,
            popular, stock, category_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    products.forEach(p => {

        const categoryId = categoryMap[p.category];

        if (!categoryId) {
            console.error(`❌ Categoría no encontrada: ${p.category}`);
            return;
        }

        insertProduct.run(
            p.name,
            p.price,
            p.img,
            p.description,
            p.store_name || 'MiEcommerce',
            p.store_profile_url || '',
            p.popular ? 1 : 0,
            Math.floor(Math.random() * 10) + 1,
            categoryId
        );

    });

    console.log("✔ Seed ejecutado correctamente");
};

seed();