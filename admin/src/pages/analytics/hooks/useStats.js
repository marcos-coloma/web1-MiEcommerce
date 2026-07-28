import { useEffect, useState } from "react";

export default function useStats() {

    const [stats, setStats] = useState({
        totalProducts: 0,
        totalCategories: 0
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchStats = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/stats");

                if (!res.ok) throw new Error("Error al obtener estadísticas");

                const data = await res.json();

                setStats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();

    }, []);


    return { stats, loading, error };
}