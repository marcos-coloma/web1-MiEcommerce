import "./CategoryCard.css";


export default function CategoryCard({ category }) {

    return (

        <article className="category-card">

            <img
                src={`http://localhost:3000/img/ui/${category.icon}`}
                alt={category.name}
                className="category-card-image"
            />


            <h3 className="category-card-name">
                {category.name}
            </h3>


            <div className="category-card-actions">

                <button>
                    Editar
                </button>

                <button className="delete">
                    Eliminar
                </button>

            </div>

        </article>

    );

}