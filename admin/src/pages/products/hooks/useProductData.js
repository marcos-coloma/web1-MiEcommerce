// src/pages/Products/hooks/useProductData.js

import { useEffect, useState } from "react";

import { buildFormData } from "../utils/productUtils";


export default function useProductData(id) {

    const [product, setProduct] = useState(null);

    const [formData, setFormData] = useState(null);

    const [categories, setCategories] = useState([]);


    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);



    useEffect(() => {


        const fetchData = async () => {

            try {


                const productResponse = await fetch(
                    `http://localhost:3000/api/products/${id}`
                );


                if (!productResponse.ok) {
                    throw new Error(
                        "Error al obtener el producto"
                    );
                }


                const productData =
                    await productResponse.json();



                const categoriesResponse = await fetch(
                    "http://localhost:3000/api/categories"
                );


                if (!categoriesResponse.ok) {
                    throw new Error(
                        "Error al obtener categorias"
                    );
                }


                const categoriesData =
                    await categoriesResponse.json();



                setProduct(productData);

                setFormData(
                    buildFormData(productData)
                );


                setCategories(categoriesData);



            } catch (error) {

                setError(error.message);


            } finally {

                setLoading(false);

            }

        };


        fetchData();


    }, [id]);



    return {

        product,
        setProduct,

        formData,
        setFormData,

        categories,

        loading,
        error

    };

}