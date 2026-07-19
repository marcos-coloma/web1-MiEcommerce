export const buildFormData = (product) => ({
    name: product.name || "",
    description: product.description || "",
    price: Number.isInteger(Number(product.price))
        ? String(product.price)
        : "0",
    stock: Number.isInteger(Number(product.stock))
        ? String(product.stock)
        : "0",
    img: product.img || "",
    store_name: product.store_name || "",
    store_profile_url: product.store_profile_url || "",
    category_id: product.category_id || ""
});


export const validateForm = (values) => {

    const errors = {};

    if (!values.name.trim()) {
        errors.name = "El nombre es requerido";
    }

    if (!Number.isInteger(Number(values.price))) {
        errors.price = "El precio debe ser un numero entero";
    }

    if (!Number.isInteger(Number(values.stock))) {
        errors.stock = "El stock debe ser un numero entero";
    }

    if (!values.category_id) {
        errors.category_id = "La categoria es requerida";
    }

    return errors;
};


export const buildProductPayload = (formData, product = {}) => ({
    name: formData.name.trim(),
    price: Number(formData.price || 0),
    img: formData.img.trim() || "/img/products/placeholder.webp",
    description: formData.description,
    store_name: formData.store_name.trim() || "MiEcommerce",
    store_profile_url: formData.store_profile_url.trim(),
    popular: product.popular ?? 0,
    stock: Number(formData.stock || 0),
    category_id: Number(formData.category_id)
});



export const getCategories = (products) => {

    const map = new Map();

    products.forEach((product) => {
        if (!map.has(product.category_id)) {
            map.set(product.category_id, {
                id: product.category_id,
                name: product.category
            });
        }
    });

    return Array.from(map.values());
};


export const filterProducts = (products, search, category) => {

    return products.filter((product) => {

        const matchesName = product.name
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesCategory =
            category === "" ||
            product.category_id === Number(category);

        return matchesName && matchesCategory;

    });

};