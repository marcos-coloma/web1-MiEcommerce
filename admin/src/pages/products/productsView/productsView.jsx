// src/pages/Products/ProductView/ProductView.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./ProductsView.css";

export default function ProductView() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actionMessage, setActionMessage] = useState("");
    const [actionError, setActionError] = useState("");
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);


    const buildFormData = (product) => ({
        name: product.name || "",
        description: product.description || "",
        price: Number.isInteger(Number(product.price)) ? String(product.price) : "0",
        stock: Number.isInteger(Number(product.stock)) ? String(product.stock) : "0",
        img: product.img || "",
        store_name: product.store_name || "",
        store_profile_url: product.store_profile_url || ""
    });


    const validateForm = (values) => {

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

        return errors;

    };


    const buildProductPayload = () => ({
        name: formData.name.trim(),
        price: Number(formData.price || 0),
        img: formData.img.trim() || "/img/products/placeholder.webp",
        description: formData.description,
        store_name: formData.store_name.trim() || "MiEcommerce",
        store_profile_url: formData.store_profile_url.trim(),
        popular: product.popular ?? 0,
        stock: Number(formData.stock || 0),
        category_id: product.category_id
    });


    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await fetch(
                    `http://localhost:3000/api/products/${id}`
                );

                if (!response.ok) {
                    throw new Error("Error al obtener el producto");
                }

                const data = await response.json();

                setProduct(data);
                setFormData(buildFormData(data));

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);


    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));

        setFormErrors((currentErrors) => ({
            ...currentErrors,
            [name]: undefined
        }));

        setActionMessage("");
        setActionError("");

    };


    const handleCancel = () => {
        setFormData(buildFormData(product));
        setFormErrors({});
        setActionMessage("");
        setActionError("");
    };


    const handleStockChange = (amount) => {

        setFormData((currentData) => {

            const currentStock = Number.isInteger(Number(currentData.stock))
                ? Number(currentData.stock)
                : 0;

            return {
                ...currentData,
                stock: String(Math.max(0, currentStock + amount))
            };

        });

        setFormErrors((currentErrors) => ({
            ...currentErrors,
            stock: undefined
        }));

        setActionMessage("");
        setActionError("");

    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        const errors = validateForm(formData);

        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setSaving(true);
        setActionMessage("");
        setActionError("");

        try {

            const payload = buildProductPayload();

            const response = await fetch(
                `http://localhost:3000/api/products/${id}/edit`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                throw new Error("Error al guardar el producto");
            }

            const updatedProduct = {
                ...product,
                ...payload
            };

            setProduct(updatedProduct);
            setFormData(buildFormData(updatedProduct));
            setActionMessage("Producto guardado correctamente");

        } catch (error) {

            setActionError(error.message);

        } finally {

            setSaving(false);

        }

    };


    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Estas seguro de que queres eliminar este producto?"
        );

        if (!confirmed) {
            return;
        }

        setDeleting(true);
        setActionMessage("");
        setActionError("");

        try {

            const response = await fetch(
                `http://localhost:3000/api/products/${id}/delete`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el producto");
            }

            navigate("/products");

        } catch (error) {

            setActionError(error.message);
            setDeleting(false);

        }

    };


    if (loading) {

        return (
            <div className="product-view">
                <p className="product-view__loading">Cargando...</p>
            </div>
        );

    }


    if (error) {

        return (
            <div className="product-view">
                <p className="product-view__error">{error}</p>
            </div>
        );

    }


    if (!product || !formData) {

        return (
            <div className="product-view">
                <p className="product-view__error">Producto no encontrado</p>
            </div>
        );

    }


    const imageSrc = product.img?.startsWith("http")
        ? product.img
        : `http://localhost:3000${product.img}`;

    const storeProfileUrl = product.store_profile_url?.trim();


    return (
        <div className="product-view">

            <header className="product-view__header">
                <div className="product-view__title-group">
                    <button
                        type="button"
                        className="product-view__back-button"
                        onClick={() => navigate("/products")}
                    >
                        Volver
                    </button>

                    <h1>Productos &gt; #{product.id}</h1>
                </div>

                <button
                    type="button"
                    className="product-view__delete-button"
                    onClick={handleDelete}
                    disabled={deleting || saving}
                >
                    {deleting ? "Eliminando..." : "Eliminar"}
                </button>
            </header>

            <section className="product-summary">

                <div className="product-summary__image-container">
                    <img
                        className="product-summary__image"
                        src={imageSrc}
                        alt={product.name}
                    />
                </div>

                <div className="product-summary__content">

                    <div>
                        <span className="product-summary__label">Nombre</span>
                        <h2 className="product-summary__name">{product.name}</h2>
                    </div>

                    <dl className="product-summary__details">

                        <div>
                            <dt>Identificador</dt>
                            <dd>#{product.id}</dd>
                        </div>

                        <div>
                            <dt>Stock</dt>
                            <dd>{product.stock}</dd>
                        </div>

                        <div>
                            <dt>Precio</dt>
                            <dd>${product.price}</dd>
                        </div>

                        <div>
                            <dt>Tienda</dt>
                            <dd>{product.store_name || "No disponible"}</dd>
                        </div>

                    </dl>

                    {storeProfileUrl && (
                        <a
                            className="product-summary__store-link"
                            href={storeProfileUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver tienda
                        </a>
                    )}

                </div>

            </section>

            <form className="product-form" onSubmit={handleSubmit}>

                <div className="product-form__header">
                    <h2>Editar producto</h2>
                </div>

                <div className="product-form__grid">

                    <label className="product-form__field">
                        <span>Nombre</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.name && (
                            <small>{formErrors.name}</small>
                        )}
                    </label>

                    <label className="product-form__field">
                        <span>Precio</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                        {formErrors.price && (
                            <small>{formErrors.price}</small>
                        )}
                    </label>

                    <label className="product-form__field">
                        <span>Stock</span>
                        <div className="product-form__stock-control">
                            <button
                                type="button"
                                onClick={() => handleStockChange(-1)}
                                aria-label="Disminuir stock"
                            >
                                -
                            </button>

                            <input
                                type="text"
                                inputMode="numeric"
                                name="stock"
                                value={formData.stock}
                                onChange={handleInputChange}
                            />

                            <button
                                type="button"
                                onClick={() => handleStockChange(1)}
                                aria-label="Aumentar stock"
                            >
                                +
                            </button>
                        </div>
                        {formErrors.stock && (
                            <small>{formErrors.stock}</small>
                        )}
                    </label>

                    <label className="product-form__field">
                        <span>Tienda</span>
                        <input
                            type="text"
                            name="store_name"
                            value={formData.store_name}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className="product-form__field">
                        <span>URL perfil de tienda</span>
                        <input
                            type="text"
                            name="store_profile_url"
                            value={formData.store_profile_url}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className="product-form__field product-form__field--full">
                        <span>URL de imagen</span>
                        <input
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className="product-form__field product-form__field--full">
                        <span>Descripcion</span>
                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </label>

                </div>

                <div className="product-form__actions">
                    {actionMessage && (
                        <p className="product-form__message">
                            {actionMessage}
                        </p>
                    )}

                    {actionError && (
                        <p className="product-form__message product-form__message--error">
                            {actionError}
                        </p>
                    )}

                    <button
                        type="button"
                        className="product-form__button product-form__button--secondary"
                        onClick={handleCancel}
                        disabled={saving || deleting}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="product-form__button product-form__button--primary"
                        disabled={saving || deleting}
                    >
                        {saving ? "Guardando..." : "Guardar"}
                    </button>
                </div>

            </form>

        </div>
    );
}
