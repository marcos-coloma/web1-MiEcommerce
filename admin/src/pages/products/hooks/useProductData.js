// src/pages/Products/ProductView/hooks/useProductData.js

import { useEffect, useState } from "react";

import { buildFormData } from "../utils/productUtils";


export default function useProductData(id) {

    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await fetch(
                    `http://localhost:3000/api/products/${id}`
                );


                if (!response.ok) {
                    throw new Error(
                        "Error al obtener el producto"
                    );
                }


                const data = await response.json();


                setProduct(data);
                setFormData(buildFormData(data));


            } catch (error) {

                setError(error.message);


            } finally {

                setLoading(false);

            }

        };


        fetchProduct();


    }, [id]);



    return {

        product,
        setProduct,

        formData,
        setFormData,

        loading,
        error

    };

}