import { useNavigate } from "react-router-dom";

import useCategories from "../hooks/useCategories";

import CategoryForm from "../components/CategoryForm/CategoryForm";

import "./NewCategory.css";


export default function NewCategory() {

    const navigate = useNavigate();


    const {
        createCategory,
        loading,
        error
    } = useCategories();



    const handleCreate = async (data) => {

        const newCategory = await createCategory(data);


        if (newCategory) {

            navigate("/categories");

        }

    };



    return (

        <section className="new-category-page">


            <div className="new-category-header">

                <h1>
                    Nueva categoría
                </h1>


                <button
                    onClick={() => navigate("/categories")}
                >
                    Volver
                </button>

            </div>



            {
                error && (

                    <p className="new-category-error">
                        {error}
                    </p>

                )
            }



            {
                loading ? (

                    <p>
                        Creando categoría...
                    </p>

                ) : (

                    <CategoryForm
                        onSubmit={handleCreate}
                        buttonText="Crear categoría"
                    />

                )
            }


        </section>

    );

}