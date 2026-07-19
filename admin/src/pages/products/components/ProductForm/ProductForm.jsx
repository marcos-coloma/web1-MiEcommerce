import "./ProductForm.css";

export default function ProductForm({
    formData,
    formErrors,
    onChange,
    onSubmit,
    onCancel,
    onStockChange,
    saving,
    deleting,
    message,
    error,
    children,
    categories = []
}) {



    return (

        <form className="product-form" onSubmit={onSubmit}>

            <div className="product-form__header">
                {children}
            </div>

            <div className="product-form__grid">

                <label className="product-form__field">
                    <span>Nombre</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                    />
                    {formErrors.name && <small>{formErrors.name}</small>}
                </label>

                <label className="product-form__field">
                    <span>Precio</span>
                    <input
                        type="text"
                        inputMode="numeric"
                        name="price"
                        value={formData.price}
                        onChange={onChange}
                    />
                    {formErrors.price && <small>{formErrors.price}</small>}
                </label>

                <label className="product-form__field">
                    <span>Stock</span>

                    <div className="product-form__stock-control">
                        <button
                            type="button"
                            onClick={() => onStockChange(-1)}
                        >
                            -
                        </button>

                        <input
                            type="text"
                            inputMode="numeric"
                            name="stock"
                            value={formData.stock}
                            onChange={onChange}
                        />

                        <button
                            type="button"
                            onClick={() => onStockChange(1)}
                        >
                            +
                        </button>
                    </div>

                    {formErrors.stock && <small>{formErrors.stock}</small>}
                </label>


                <label className="product-form__field">
                    <span>Categoria</span>

                    <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={onChange}
                    >
                        <option value="">Seleccionar categoria</option>

                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    {formErrors.category_id && (
                        <small>{formErrors.category_id}</small>
                    )}
                </label>

                <label className="product-form__field">
                    <span>Tienda</span>
                    <input
                        type="text"
                        name="store_name"
                        value={formData.store_name}
                        onChange={onChange}
                    />
                </label>

                <label className="product-form__field">
                    <span>URL perfil de tienda</span>
                    <input
                        type="text"
                        name="store_profile_url"
                        value={formData.store_profile_url}
                        onChange={onChange}
                    />
                </label>

                <label className="product-form__field product-form__field--full">
                    <span>URL de imagen</span>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={onChange}
                    />
                </label>

                <label className="product-form__field product-form__field--full">
                    <span>Descripcion</span>
                    <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={onChange}
                    />
                </label>

            </div>

            <div className="product-form__actions">

                {message && (
                    <p className="product-form__message">
                        {message}
                    </p>
                )}

                {error && (
                    <p className="product-form__message product-form__message--error">
                        {error}
                    </p>
                )}

                <button
                    type="button"
                    className="product-form__button product-form__button--secondary"
                    onClick={onCancel}
                    disabled={saving || deleting}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="product-form__button product-form__button--primary"
                    disabled={saving || deleting}
                >
                    {saving ? "Guardando..." : "Guardar"}
                </button>

            </div>

        </form>
    );
}