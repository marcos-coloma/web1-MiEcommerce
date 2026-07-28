import { useState } from "react";

import "./CategoryForm.css";


export default function CategoryForm({
    initialData = {},
    onSubmit,
    buttonText = "Guardar"
}) {


    const [formData, setFormData] = useState({

        name: initialData.name || "",
        icon: initialData.icon || ""

    });



    const handleChange = (e) => {

        const { name, value } = e.target;


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

            <div className="form-group">

                <label>
                    Nombre
                </label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Electrónica"
                />

            </div>



            <div className="form-group">

                <label>
                    Icono
                </label>

                <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    placeholder="imagen.png o URL"
                />

            </div>



            <button
                type="submit"
                className="category-form-button"
            >
                {buttonText}
            </button>


        </form>

    );

}