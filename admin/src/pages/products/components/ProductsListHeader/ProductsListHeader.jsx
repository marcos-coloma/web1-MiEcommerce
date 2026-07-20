import "./ProductsListHeader.css";

export default function ProductsListHeader({
    onAdd,
    search,
    setSearch,
    categories,
    category,
    setCategory
}) {

    return (
        <div className="products-header">

            <h1 className="products-header__title">
                Productos
            </h1>


            <div className="products-header__actions">


                <div className="products-header__search-container">

                    <span className="search-icon">
                        🔍
                    </span>


                    <input
                        className="products-header__search"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>



                <select
                    className="products-header__category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="">
                        Todas las categorías
                    </option>


                    {categories.map((category) => (

                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>

                    ))}


                </select>




                <button
                    className="products-header__add"
                    onClick={onAdd}
                >

                    <span className="add-text">
                        Agregar Producto
                    </span>

                    <span className="add-icon">
                        +
                    </span>

                </button>


            </div>

        </div>
    );
}