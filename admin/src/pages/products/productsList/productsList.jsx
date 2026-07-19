import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductItem from "../../../components/ProductItem/ProductItem";
import ProductsHeader from "../../../components/ProductsHeader/ProductsHeader";

import {
    filterProducts,
    getCategories
} from "../utils/productUtils";

import "./ProductsList.css";


export default function ProductsList() {

    const navigate = useNavigate();


    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/api/products"
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



    const categories = getCategories(products);


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


            <ProductsHeader
                onAdd={() => navigate("/products/new")}

                search={search}
                setSearch={setSearch}

                categories={categories}
                category={category}
                setCategory={setCategory}
            />



            <div className="products__list">

                {
                    filteredProducts.length === 0 ? (

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

                    )
                }

            </div>


        </div>

    );
}