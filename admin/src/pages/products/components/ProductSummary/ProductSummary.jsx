import "./ProductSummary.css";

export default function ProductSummary({ product }) {

    const imageSrc = product?.img
    ? product.img.startsWith("http")
        ? product.img
        : `http://localhost:3000${product.img}`
    : "/img/products/placeholder.webp";

    const storeProfileUrl = product.store_profile_url?.trim();

    return (

        <section className="product-summary">

            <div className="product-summary__image-container">
                <img
                className="product-summary__image"
                src={imageSrc}
                alt={product.name}
                onError={(e) => {
                    e.target.src = "/img/products/placeholder.webp";
                }}
                />
            </div>

            <div className="product-summary__content">

                <div>
                    <span className="product-summary__label">Nombre</span>
                    <h2 className="product-summary__name">
                        {product.name}
                    </h2>
                </div>

                <dl className="product-summary__details">

                    <div>
                        <dt>Identificador</dt>
                        <dd>#{product.id}</dd>
                    </div>

                    <div>
                        <dt>Stock</dt>
                        <dd>{product.stock}</dd>
                    </div>

                    <div>
                        <dt>Precio</dt>
                        <dd>${product.price}</dd>
                    </div>

                    <div>
                        <dt>Tienda</dt>
                        <dd>
                            {product.store_name || "No disponible"}
                        </dd>
                    </div>

                </dl>

                {storeProfileUrl && (
                    <a
                        className="product-summary__store-link"
                        href={storeProfileUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver tienda
                    </a>
                )}

            </div>

        </section>
    );
}