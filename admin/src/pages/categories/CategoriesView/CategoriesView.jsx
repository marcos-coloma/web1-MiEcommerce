import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useCategories from "../hooks/useCategories";

import "./CategoriesView.css";

export default function CategoryView() {

    const { id } = useParams();
    const navigate = useNavigate();

    const {
        category,
        loading,
        error,
        getCategoryById
    } = useCategories();


    useEffect(() => {
        getCategoryById(id);
    }, [id, getCategoryById]);


    const handleBack = () => navigate("/categories");
    const handleEdit = () => navigate(`/categories/${id}/edit`);


    if (loading) return <p>Cargando categoría...</p>;
    if (error) return <p>{error}</p>;
    if (!category) return <p>Categoría no encontrada</p>;


    const imageSrc = category.icon?.startsWith("http")
        ? category.icon
        : `http://localhost:3000/img/ui/${category.icon || "default.png"}`;


    return (
        <section className="category-view">

            <div className="category-view__header">

                <button onClick={handleBack}>
                    Volver
                </button>

                <button onClick={handleEdit}>
                    Editar
                </button>

            </div>

            <div className="category-view__card">

                <img
                    src={imageSrc}
                    alt={category.name}
                    className="category-view__image"
                />

                <h2>{category.name}</h2>

                <p>ID: {category.id || category._id}</p>

            </div>

        </section>
    );
}