const db = require("../../db/database");


const Category = {


    getAll: () => {

        return db.prepare(`
            SELECT
                id,
                name
            FROM categories
            ORDER BY name ASC
        `).all();

    }


};


module.exports = Category;