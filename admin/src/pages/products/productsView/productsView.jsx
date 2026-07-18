// src/pages/Products/ProductView/ProductView.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductsView.css";

export default function ProductView() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);


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


    if (!product) {

        return (
            <div className="product-view">
                <p className="product-view__error">Producto no encontrado</p>
            </div>
        );

    }


    const imageSrc = product.img?.startsWith("http")
        ? product.img
        : `http://localhost:3000${product.img}`;


    return (
        <div className="product-view">

            <header className="product-view__header">
                <h1>Productos &gt; #{product.id}</h1>
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

                </div>

            </section>

        </div>
    );
}
