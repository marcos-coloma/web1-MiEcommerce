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

    };



    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

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
                    placeholder="imagen.png o URL"
                />

            </label>



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