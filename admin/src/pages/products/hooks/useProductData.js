import { useEffect, useState } from "react";

import { buildFormData } from "../utils/productUtils";


export default function useProductData(id) {

    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/products/${id}`
                );

                if (!response.ok) {
                    throw new Error(
                        "Error al obtener el producto"
                    );
                }

                const productData =
                    await response.json();

                setProduct(productData);

                setFormData(
                    buildFormData(productData)
                );

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
        loading,
        error
    };
}