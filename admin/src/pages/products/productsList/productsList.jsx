// src/pages/Products/ProductsList/ProductsList.jsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductItem from "../../../components/ProductItem/ProductItem";
import ProductsHeader from "../../../components/ProductsHeader/ProductsHeader";
import "./ProductsList.css";

export default function ProductsList() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const products = [
        { id: 1, name: "Monstera", price: 5000 },
        { id: 2, name: "Cactus", price: 3000 },
        { id: 3, name: "Helecho", price: 2500 },
    ];

    const loading = false;

    if (loading) {
        return (
            <div className="products">
                <p className="products__loading">Cargando...</p>
            </div>
        );
    }

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="products">

            <ProductsHeader
                onAdd={() => navigate("/products/new")}
                search={search}
                setSearch={setSearch}
            />

            <div className="products__list">

                {filteredProducts.length === 0 ? (
                    <p className="products__empty">
                        No se encontraron productos
                    </p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                )}

            </div>
        </div>
    );
}