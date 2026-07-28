import { useState } from "react";
import { useEffect } from "react";

import "./CategoryForm.css";


export default function CategoryForm({
    initialData,
    onSubmit,
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
                />

            </label>



            <label>

                Icono

                <input
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                />

            </label>



            <button type="submit">

                {buttonText}

            </button>


        </form>

    );

}