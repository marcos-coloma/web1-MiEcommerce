import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import "./Home.css";

import productsIcon from "../../assets/icons/products.svg";
import usersIcon from "../../assets/icons/users.svg";
import analyticsIcon from "../../assets/icons/analytics.svg";


export default function Home() {

    const navigate = useNavigate();

    const sections = [
        {
            title: "Productos",
            icon: productsIcon,
            count: 0,
            buttons: [
                {
                    label: "Ver Listado",
                    path: "/products",
                },
                {
                    label: "Agregar Producto",
                    path: "/products/new",
                },
            ],
        },
        {
            title: "Usuarios",
            icon: usersIcon,
            count: 0,
            buttons: [
                {
                    label: "Ver Listado",
                    path: "/profile",
                },
                {
                    label: "Agregar Usuario",
                    path: "/profile/new",
                },
            ],
        },
        {
            title: "Estadísticas",
            icon: analyticsIcon,
            count: 0,
            buttons: [
                {
                    label: "Ver analiticas",
                    path: "/analytics",
                },
            ],
        },
    ];


    return (
        <div className="home">

            <h1>
                ¡Hola USERNAME!
            </h1>


            <section className="home__cards">

                {sections.map((section) => (
                    <DashboardCard
                        key={section.title}
                        section={section}
                        navigate={navigate}
                    />
                ))}

            </section>

        </div>
    );
}