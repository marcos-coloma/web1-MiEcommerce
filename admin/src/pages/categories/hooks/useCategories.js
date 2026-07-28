import { useState } from "react";

const API_URL = "http://localhost:3000/api/categories";

export default function useCategories() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const request = async (url, options = {}) => {
        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        return data.data || data;
    };


    const getCategories = async () => {
        
        try {
            setLoading(true);
            setError(null);

            const data = await request(API_URL);
            setCategories(data);

        } catch (err) {
            setError(err.message || "Error al obtener categorías");
        } finally {
            setLoading(false);
        }
    };


    const getCategoryById = async (id) => {
        if (!id) return;

        try {
            setLoading(true);
            setError(null);

            const data = await request(`${API_URL}/${id}`);
            setCategory(data);

        } catch (err) {
            setError(err.message || "Error al obtener la categoría");
        } finally {
            setLoading(false);
        }
    };


    const createCategory = async (categoryData) => {
        try {
            setLoading(true);
            setError(null);

            const newCategory = await request(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(categoryData)
            });

            setCategories(prev => [...prev, newCategory]);

            return newCategory;

        } catch (err) {
            setError(err.message || "Error al crear la categoría");
            return null;
        } finally {
            setLoading(false);
        }
    };


    const updateCategory = async (id, categoryData) => {
        try {
            setLoading(true);
            setError(null);

            const updated = await request(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(categoryData)
            });

            // 🔑 usamos updated.id (más seguro)
            setCategories(prev =>
                prev.map(cat => cat.id === updated.id ? updated : cat)
            );

            setCategory(updated);

            return updated;

        } catch (err) {
            setError(err.message || "Error al actualizar la categoría");
            return null;
        } finally {
            setLoading(false);
        }
    };


    const deleteCategory = async (id) => {
        try {
            setLoading(true);
            setError(null);

            await request(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            setCategories(prev =>
                prev.filter(cat => cat.id !== id)
            );

            if (category?.id === id) {
                setCategory(null);
            }

            return true;

        } catch (err) {
            setError(err.message || "Error al eliminar la categoría");
            return false;
        } finally {
            setLoading(false);
        }
    };


    return {
        // state
        categories,
        category,
        loading,
        error,

        // actions
        getCategories,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory
    };
}