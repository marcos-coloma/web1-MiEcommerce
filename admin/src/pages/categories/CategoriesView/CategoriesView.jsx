import { useParams } from "react-router-dom";

export default function CategoriesView() {

    const { id } = useParams();

    return (
        <div>
            <h1>Detalle de Categoría</h1>
            <p>ID de categoría: {id}</p>
        </div>
    );
}