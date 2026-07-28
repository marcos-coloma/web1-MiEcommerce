// src/errors/NotFound/NotFound.jsx

import { Link } from "react-router-dom";
import "./NotFound.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function NotFound() {
    return (
        <section className="not-found">

        <PageTitle title="Not Found | Admin" />

            <div className="not-found__card">

                <span className="not-found__code">
                    404
                </span>

                <h1>
                    Página no encontrada
                </h1>

                <p>
                    La sección que estás buscando no existe
                    o fue movida.
                </p>

                <Link 
                    to="/"
                    className="not-found__button"
                >
                    Volver al inicio
                </Link>

            </div>

        </section>
    );
}