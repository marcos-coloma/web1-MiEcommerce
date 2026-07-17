import { useNavigate } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product }) {
    const navigate = useNavigate();

    return (
        <div
            className="product-item"
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <h3 className="product-item__name">
                {product.name}
            </h3>

            <p className="product-item__price">
                ${product.price}
            </p>
        </div>
    );
}