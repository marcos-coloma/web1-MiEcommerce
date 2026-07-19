import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductItem.css";

export default function ProductItem({ product }) {

    const navigate = useNavigate();

    const [imageLoading, setImageLoading] = useState(true);


    const imageUrl = product.img.startsWith("http")
        ? product.img
        : `http://localhost:3000${product.img}`;


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
                    src={imageUrl}
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