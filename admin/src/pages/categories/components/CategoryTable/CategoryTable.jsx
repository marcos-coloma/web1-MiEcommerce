import "./CategoryTable.css";


export default function CategoryTable({
    categories,
    onView,
    onEdit,
    onDelete
}) {


    return (

        <div className="category-table-container">

            <table className="category-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Icono</th>

                        <th>Nombre</th>

                        <th>Acciones</th>

                    </tr>

                </thead>


                <tbody>

                    {
                        categories.map(category => (

                            <tr key={category.id}>

                                <td>
                                    {category.id}
                                </td>


                                <td>

                                    <img
                                        src={`http://localhost:3000/img/ui/${category.icon}`}
                                        alt={category.name}
                                        className="category-table-icon"
                                    />

                                </td>


                                <td>
                                    {category.name}
                                </td>


                                <td>

                                    <button
                                        onClick={() => onView(category.id)}
                                    >
                                        Ver
                                    </button>


                                    <button
                                        onClick={() => onEdit(category.id)}
                                    >
                                        Editar
                                    </button>


                                    <button
                                        className="delete"
                                        onClick={() => onDelete(category.id)}
                                    >
                                        Eliminar
                                    </button>

                                </td>


                            </tr>

                        ))
                    }

                </tbody>


            </table>


        </div>

    );

}