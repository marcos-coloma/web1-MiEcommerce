import "./ProductsHeader.css";

export default function ProductsHeader({ onAdd, search, setSearch }) {
    return (
        <div className="products-header">

            <h1 className="products-header__title">
                Productos
            </h1>

            <div className="products-header__actions">

                <input
                    className="products-header__search"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button
                    className="products-header__add"
                    onClick={onAdd}
                >
                    Agregar Producto
                </button>

            </div>

        </div>
    );
}