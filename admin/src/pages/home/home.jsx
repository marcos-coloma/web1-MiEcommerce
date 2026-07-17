import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import "./Home.css";

export default function Home() {

    const navigate = useNavigate();

    const sections = [
        {
            title: "Productos",
            icon: "📦",
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
            title: "Categorías",
            icon: "📂",
            count: 0,
            buttons: [
                {
                    label: "Ver Listado",
                    path: "/categories",
                },
                {
                    label: "Agregar Categoría",
                    path: "/categories/new",
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