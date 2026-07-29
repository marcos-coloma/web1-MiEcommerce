import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {filterProducts} from "../utils/productUtils";

import PageTitle from "../../../components/PageTitle/PageTitle";
import ProductListItem from "../components/ProductListItem/ProductListItem";
import ProductsListHeader from "../components/ProductsListHeader/ProductsListHeader";

import "./ProductsList.css";


export default function ProductsList() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/products`
                );

                if (!response.ok) {
                    throw new Error(
                        "Error al obtener productos"
                    );
                }
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);


    useEffect(() => {

        const fetchCategories = async () => {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/categories`
                );

                if (!response.ok) {
                    throw new Error(
                        "Error al obtener categorías"
                    );
                }

                const data = await response.json();
                setCategories(data);

            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);


    const filteredProducts = filterProducts(
        products,
        search,
        category
    );


    if (loading) {
        return (
            <div className="products">
                <p className="products__loading">
                    Cargando...
                </p>
            </div>
        );
    }



    if (error) {
        return (
            <div className="products">
                <p className="products__error">
                    {error}
                </p>
            </div>
        );
    }


    return (
        <div className="products">

        <PageTitle title="Products List | Admin" />

            <ProductsListHeader
                onAdd={() => navigate("/products/new")}

                search={search}
                setSearch={setSearch}

                category={category}
                setCategory={setCategory}

                categories={categories}
            />

            <div className="products__list">

                {
                    filteredProducts.length === 0 ? (
                        <p className="products__empty">
                            No se encontraron productos
                        </p>
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductListItem
                                key={product.id}
                                product={product}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}