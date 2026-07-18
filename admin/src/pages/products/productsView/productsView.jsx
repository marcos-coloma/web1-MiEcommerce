// src/pages/Products/ProductView/ProductView.jsx

import { useNavigate, useParams } from "react-router-dom";

import ProductViewForm from "./components/ProductViewForm/ProductViewForm";
import ProductViewHeader from "./components/ProductViewHeader/ProductViewHeader";
import ProductViewSummary from "./components/ProductViewSummary/ProductViewSummary";

import useProductData from "./hooks/useProductData";
import useProductView from "./hooks/useProductView";

import "./ProductsView.css";


export default function ProductView() {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        product,
        setProduct,
        formData,
        setFormData,
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


    return (
        <div className="product-view">


            <ProductViewHeader
                productId={product.id}
                onBack={() => navigate("/products")}
                onDelete={handleDelete}
                deleting={deleting}
                saving={saving}
            />


            <ProductViewSummary
                product={product}
            />


            <ProductViewForm
                formData={formData}
                formErrors={formErrors}

                onChange={handleInputChange}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onStockChange={handleStockChange}

                saving={saving}
                deleting={deleting}

                message={actionMessage}
                error={actionError}
            />

        </div>
    );

}