import { useNavigate } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product }) {

    const navigate = useNavigate();

    return (
        <div
            className="product-item"
            onClick={() => navigate(`/products/${product.id}`)}
        >

            <img
                className="product-item__image"
                src={`http://localhost:3000${product.img}`}
                alt={product.name}
            />

            <div className="product-item__info">

                <h3 className="product-item__name">
                    {product.name}
                </h3>

                <p>
                    Categoría: {product.category_id}
                </p>

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