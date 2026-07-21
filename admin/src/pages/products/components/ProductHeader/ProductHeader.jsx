import "./ProductHeader.css";

export default function ProductHeader({
    productId,
    onBack
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

                <h1>
                    Productos &gt; #{productId}
                </h1>

            </div>

        </header>

    );
}