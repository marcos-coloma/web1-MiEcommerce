import "./ProductViewHeader.css";

export default function ProductViewHeader({
    productId,
    onBack,
    onDelete,
    deleting,
    saving
}) {
    return (

        <header className="product-view__header">

            <div className="product-view__title-group">

                <button
                    type="button"
                    className="product-view__back-button"
                    onClick={onBack}
                >
                    Volver
                </button>

                <h1>Productos &gt; #{productId}</h1>

            </div>

            <button
                type="button"
                className="product-view__delete-button"
                onClick={onDelete}
                disabled={deleting || saving}
            >
                {deleting ? "Eliminando..." : "Eliminar"}
            </button>

        </header>

    );
}