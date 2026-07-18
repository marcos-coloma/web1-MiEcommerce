// src/pages/Products/ProductsList/ProductsList.jsx

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductItem from "../../../components/ProductItem/ProductItem";
import ProductsHeader from "../../../components/ProductsHeader/ProductsHeader";

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




    const categories = [
        ...new Set(
            products.map(product => product.category)
        )
    ];




    const filteredProducts = products.filter((product) => {


        const matchesName = product.name
            .toLowerCase()
            .includes(search.trim().toLowerCase());



        const matchesCategory =
            category === "" ||
            product.category === category;



        return matchesName && matchesCategory;

    });




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