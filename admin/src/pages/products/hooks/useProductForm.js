// src/pages/Products/hooks/useProductForm.js

import { useState } from "react";

import {
    buildFormData,
    validateForm,
    buildProductPayload
} from "../utils/productUtils";


export default function useProductForm({
    id,
    product,
    setProduct,
    formData,
    setFormData,
    navigate
}) {


    const [formErrors, setFormErrors] = useState({});
    const [actionMessage, setActionMessage] = useState("");
    const [actionError, setActionError] = useState("");
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);



    const clearMessages = () => {
        setActionMessage("");
        setActionError("");
    };



    const handleInputChange = (event) => {
        const {
            name,
            value
        } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value
        }));

        setFormErrors((current) => ({
            ...current,
            [name]: undefined
        }));

        clearMessages();
    };



    const handleCancel = () => {
        setFormData(
            buildFormData(product)
        );
        setFormErrors({});
        clearMessages();
    };



    const handleStockChange = (amount) => {
        setFormData((current) => {
            const stock = Number(current.stock) || 0;

            return {
                ...current,
                stock: String(
                    Math.max(
                        0,
                        stock + amount
                    )
                )
            };
        });


        setFormErrors((current) => ({
            ...current,
            stock: undefined
        }));
        clearMessages();
    };



    const handleSubmit = async (event) => {

        event.preventDefault();
        const errors = validateForm(formData);

        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setSaving(true);
        clearMessages();

        try {
            const payload =
                buildProductPayload(
                    formData,
                    product
                );

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products/${id}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Error al guardar el producto"
                );
            }

            const updatedProduct = {
                ...product,
                ...payload
            };

            setProduct(updatedProduct);

            setFormData(
                buildFormData(updatedProduct)
            );

            setActionMessage(
                "Producto guardado correctamente"
            );

        } catch(error) {
            setActionError(
                error.message
            );
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {

        const confirmed =
            window.confirm(
                "Estas seguro de que queres eliminar este producto?"
            );

        if (!confirmed) {
            return;
        }

        setDeleting(true);
        clearMessages();

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products/${id}`,
                {
                    method:"DELETE"
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Error al eliminar el producto"
                );
            }

            navigate("/products");

        } catch(error) {
            setActionError(
                error.message
            );

            setDeleting(false);
        }
    };

    return {
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
    };
}