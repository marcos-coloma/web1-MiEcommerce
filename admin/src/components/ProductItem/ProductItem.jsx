import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductItem.css";

export default function ProductItem({ product }) {

    const navigate = useNavigate();

    const [imageLoading, setImageLoading] = useState(true);

    return (
        <div
            className="product-item"
            onClick={() => navigate(`/products/${product.id}`)}
        >

            <div className="product-item__image-container">

                {imageLoading && (
                    <span className="product-item__loader">
                        Cargando imagen...
                    </span>
                )}

                <img
                    className="product-item__image"
                    src={`http://localhost:3000${product.img}`}
                    alt={product.name}
                    onLoad={() => setImageLoading(false)}
                />

            </div>


            <div className="product-item__info">

                <h3 className="product-item__name">
                    {product.name}
                </h3>

                <p>
                    Stock: {product.stock}
                </p>

            </div>


            <p className="product-item__price">
                ${product.price}
            </p>

        </div>
    );
}