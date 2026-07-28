import { useState } from "react";


const API_URL = "http://localhost:3000/api/categories";


export default function useCategories() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    // Obtener todas las categorías
    const getCategories = async () => {

        try {

            setLoading(true);
            setError(null);

            const response = await fetch(API_URL);


            if (!response.ok) {
                throw new Error("Error al cargar categorías");
            }


            const data = await response.json();

            setCategories(data);

            return data;


        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };



    // Obtener una categoría por ID
    const getCategoryById = async (id) => {

        try {

            setLoading(true);
            setError(null);


            const response = await fetch(
                `${API_URL}/${id}`
            );


            if (!response.ok) {
                throw new Error("Categoría no encontrada");
            }


            const data = await response.json();


            setCategory(data);

            return data;


        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };



    // Crear categoría
    const createCategory = async (categoryData) => {

        try {

            setLoading(true);
            setError(null);


            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(categoryData)

            });


            if (!response.ok) {
                throw new Error("Error al crear categoría");
            }


            const newCategory = await response.json();


            setCategories(prev => [
                ...prev,
                newCategory
            ]);


            return newCategory;


        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };



    // Actualizar categoría
    const updateCategory = async (id, categoryData) => {

        try {

            setLoading(true);
            setError(null);


            const response = await fetch(
                `${API_URL}/${id}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(categoryData)

                }
            );


            if (!response.ok) {
                throw new Error("Error al actualizar categoría");
            }


            const updatedCategory = await response.json();


            setCategories(prev =>
                prev.map(cat =>
                    cat.id === id
                        ? updatedCategory
                        : cat
                )
            );


            setCategory(updatedCategory);


            return updatedCategory;


        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };



    // Eliminar categoría
    const deleteCategory = async (id) => {

        try {

            setLoading(true);
            setError(null);


            const response = await fetch(
                `${API_URL}/${id}`,
                {
                    method: "DELETE"
                }
            );


            if (!response.ok) {
                throw new Error("Error al eliminar categoría");
            }


            setCategories(prev =>
                prev.filter(cat => cat.id !== id)
            );


            return true;


        } catch (err) {

            setError(err.message);

            return false;

        } finally {

            setLoading(false);

        }

    };



    return {

        categories,
        category,

        loading,
        error,

        getCategories,
        getCategoryById,

        createCategory,
        updateCategory,
        deleteCategory

    };

}