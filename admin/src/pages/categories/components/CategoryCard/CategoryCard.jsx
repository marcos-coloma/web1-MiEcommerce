import { useNavigate } from "react-router-dom";

import "./CategoryCard.css";


export default function CategoryCard({ category, onDelete }) {

    const navigate = useNavigate();


    const handleDelete = () => {

        const confirmDelete = window.confirm(
            `¿Eliminar categoría "${category.name}"?`
        );


        if (confirmDelete) {
            onDelete(category.id);
        }

    };


    return (

        <article className="category-card">

            <img
                src={`http://localhost:3000/img/ui/${category.icon}`}
                alt={category.name}
                className="category-card-image"
                onError={(e) => {
                e.currentTarget.src = "/default-icon.svg";
            }}
            />


            <h3 className="category-card-name">
                {category.name}
            </h3>


            <div className="category-card-actions">

                <button
                    onClick={() => navigate(`/categories/${category.id}`)}
                >
                    Editar
                </button>


                <button
                    className="delete"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>

            </div>

        </article>

    );
}