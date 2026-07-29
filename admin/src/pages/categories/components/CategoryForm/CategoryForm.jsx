import { useEffect, useState } from "react";

import "./CategoryForm.css";


export default function CategoryForm({
    initialData,
    onSubmit,
    onCancel,
    buttonText = "Guardar"
}) {

    const [formData, setFormData] = useState({
        name: "",
        icon: ""
    });

    const [error, setError] = useState("");


    useEffect(() => {

        if (!initialData) return;

        setFormData({
            name: initialData.name || "",
            icon: initialData.icon || ""
        });

    }, [initialData?.id]);



    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setError("");
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!formData.name.trim()) {
            setError("El nombre es obligatorio");
            return;
        }

        if (!formData.icon.trim()) {
            setError("El icono es obligatorio");
            return;
        }

        setError("");

        onSubmit({
            name: formData.name.trim(),
            icon: formData.icon.trim()
        });
    };

    return (

        <form
            className="category-form"
            onSubmit={handleSubmit}
        >

            <label>
                Nombre

                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Electrónica"
                />
            </label>

            <label>
                Icono

                <input
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    placeholder="Ej: icono.svg"
                />
            </label>

            {
                error && (
                    <p className="category-form-error">
                        {error}
                    </p>
                )
            }

            <div className="category-form-actions">

                <button
                    type="button"
                    className="category-form-cancel"
                    onClick={onCancel}
                >
                    Volver
                </button>

                <button
                    type="submit"
                    className="category-form-submit"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
}