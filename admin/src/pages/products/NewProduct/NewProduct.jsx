// src/pages/Products/NewProduct/NewProduct.jsx

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductForm from "../components/ProductForm/ProductForm";
import ProductHeader from "../components/ProductHeader/ProductHeader";

import {
    validateForm,
    buildProductPayload
} from "../utils/productUtils";

import "./NewProduct.css";


export default function NewProduct() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({

        name: "",
        description: "",
        price: "0",
        stock: "0",
        img: "",
        store_name: "",
        store_profile_url: "",
        category_id: ""

    });


    const [formErrors, setFormErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const [actionMessage, setActionMessage] = useState("");
    const [actionError, setActionError] = useState("");



    useEffect(() => {

        const fetchCategories = async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/api/categories"
                );


                if (!response.ok) {
                    throw new Error(
                        "Error al obtener categorias"
                    );
                }


                const data = await response.json();

                setCategories(data);


            } catch (error) {

                setActionError(error.message);

            }

        };


        fetchCategories();

    }, []);




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


        setActionMessage("");
        setActionError("");

    };




    const handleStockChange = (amount) => {

        setFormData((current) => {

            const stock =
                Number(current.stock) || 0;


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

    };




    const handleCancel = () => {

        navigate("/products");

    };




    const handleSubmit = async (event) => {

        event.preventDefault();


        const errors =
            validateForm(formData);


        setFormErrors(errors);


        if (Object.keys(errors).length > 0) {
            return;
        }


        setSaving(true);

        setActionMessage("");
        setActionError("");



        try {

            const payload =
                buildProductPayload(formData);



            const response = await fetch(
                "http://localhost:3000/api/products",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(payload)

                }
            );



            if (!response.ok) {

                throw new Error(
                    "Error al crear el producto"
                );

            }



            setActionMessage(
                "Producto creado correctamente"
            );



            setTimeout(() => {

                navigate("/products");

            }, 1000);



        } catch (error) {

            setActionError(
                error.message
            );


        } finally {

            setSaving(false);

        }

    };




    return (

        <div className="product-view">


            <ProductHeader
                title="Nuevo producto"
                onBack={() => navigate("/products")}
            />



            <ProductForm

                formData={formData}
                formErrors={formErrors}

                onChange={handleInputChange}
                onSubmit={handleSubmit}

                onCancel={handleCancel}
                onStockChange={handleStockChange}

                saving={saving}
                deleting={false}

                message={actionMessage}
                error={actionError}

                categories={categories}

            >

                <h2>Nuevo producto</h2>

            </ProductForm>


        </div>

    );

}