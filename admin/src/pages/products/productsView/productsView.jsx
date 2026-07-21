// src/pages/Products/ProductView/ProductView.jsx

import { useNavigate, useParams } from "react-router-dom";

import ProductForm from "../components/ProductForm/ProductForm";
import ProductHeader from "../components/ProductHeader/ProductHeader";
import ProductSummary from "../components/ProductSummary/ProductSummary";

import useProductData from "../hooks/useProductData";
import useProductView from "../hooks/useProductForm";

import "./ProductsView.css";


export default function ProductView() {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        product,
        setProduct,
        formData,
        setFormData,
        categories,
        loading,
        error
    } = useProductData(id);



    const {

        formErrors,

        actionMessage,
        actionError,

        saving,
        deleting,

        handleInputChange,
        handleCancel,
        handleStockChange,
        handleSubmit,
        handleDelete

    } = useProductView({
        id,
        product,
        setProduct,
        formData,
        setFormData,
        navigate
    });



    if (loading) {

        return (
            <div className="product-view">
                <p className="product-view__loading">
                    Cargando...
                </p>
            </div>
        );

    }


    if (error) {

        return (
            <div className="product-view">
                <p className="product-view__error">
                    {error}
                </p>
            </div>
        );

    }


    if (!product || !formData) {

        return (
            <div className="product-view">
                <p className="product-view__error">
                    Producto no encontrado
                </p>
            </div>
        );

    }

console.log("CATEGORIES:", categories);
    return (
        <div className="product-view">


            <ProductHeader
                productId={product.id}
                onBack={() => navigate("/products")}
                onDelete={handleDelete}
                deleting={deleting}
                saving={saving}
            />


            <ProductSummary
                product={product}
            />


            <ProductForm
                formData={formData}
                formErrors={formErrors}

                onChange={handleInputChange}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onStockChange={handleStockChange}
                onDelete={handleDelete}

                saving={saving}
                deleting={deleting}

                message={actionMessage}
                error={actionError}

                categories={categories}
            >
                <h2>Editar producto</h2>
            </ProductForm>
        </div>
    );

}