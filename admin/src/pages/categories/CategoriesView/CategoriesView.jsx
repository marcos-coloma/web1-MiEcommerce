import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useCategories from "../hooks/useCategories";

import CategoryForm from "../components/CategoryForm/CategoryForm";

import "./CategoriesView.css";


export default function CategoriesView() {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        category,
        loading,
        error,
        getCategoryById,
        updateCategory
    } = useCategories();



    useEffect(() => {

        getCategoryById(id);

    }, [id]);



    const handleUpdate = async (data) => {

        const updated = await updateCategory(
            id,
            data
        );


        if (updated) {

            navigate("/categories");

        }

    };



    if (loading) {

        return (
            <p>
                Cargando categoría...
            </p>
        );

    }


    if (error) {

        return (
            <p>
                {error}
            </p>
        );

    }


    if (!category) {

        return (
            <p>
                Categoría no encontrada
            </p>
        );

    }



    return (

        <section className="category-view">


            <div className="category-view__header">

                <h1>
                    Editar categoría #{category.id}
                </h1>

            </div>



            <CategoryForm
                initialData={category}
                onSubmit={handleUpdate}
                onCancel={() => navigate("/categories")}
                buttonText="Guardar cambios"
            />


        </section>

    );

}