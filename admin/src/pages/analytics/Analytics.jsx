import "./Analytics.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import useStats from "./hooks/useStats";

export default function Analytics() {

    const { stats, loading, error } = useStats();

    return (
        <div className="analytics">
            <PageTitle title="Analytics | Admin" />

            <h1>Estadísticas</h1>

            {loading && <p>Cargando...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className="analytics-cards">

                    <div className="analytics-card">
                        <h3>Productos</h3>
                        <p>{stats.totalProducts}</p>
                    </div>

                    <div className="analytics-card">
                        <h3>Categorías</h3>
                        <p>{stats.totalCategories}</p>
                    </div>

                </div>
            )}

        </div>
    );
}