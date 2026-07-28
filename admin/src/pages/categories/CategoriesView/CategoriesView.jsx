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

    }, [id]);



    if (loading) {
        return <p>Cargando categoría...</p>;
    }


    if (error) {
        return <p>{error}</p>;
    }


    if (!category) {
        return <p>Categoría no encontrada</p>;
    }



    return (

        <section className="category-view">

            <div className="category-view__header">

                <button 
                    onClick={() => navigate("/categories")}
                >
                    Volver
                </button>


                <button
                    onClick={() => navigate(`/categories/${id}/edit`)}
                >
                    Editar
                </button>

            </div>



            <div className="category-view__card">

                <img
                    src={
                        category.icon.startsWith("http")
                            ? category.icon
                            : `http://localhost:3000/img/ui/${category.icon}`
                    }
                    alt={category.name}
                    className="category-view__image"
                />


                <h2>
                    {category.name}
                </h2>


                <p>
                    ID: {category.id}
                </p>

            </div>

        </section>

    );
}