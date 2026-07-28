import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useCategories from "../hooks/useCategories";

import CategoryCard from "../components/CategoryCard/CategoryCard";

import "./CategoriesList.css";


export default function CategoriesList() {

    const navigate = useNavigate();

    const {
        categories,
        loading,
        error,
        getCategories
    } = useCategories();


    useEffect(() => {
        getCategories();
    }, []);


    if (loading) {
        return (
            <div className="categories-loading">
                Cargando categorías...
            </div>
        );
    }


    if (error) {
        return (
            <div className="categories-error">
                Error: {error}
            </div>
        );
    }


    return (
        <section className="categories-page">

            <div className="categories-header">

                <h1>
                    Categorías
                </h1>

                <button
                    onClick={() => navigate("/categories/new")}
                >
                    Nueva categoría
                </button>

            </div>


            <div className="categories-grid">

                {
                    categories.map(category => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                        />

                    ))
                }

            </div>

        </section>
    );
}