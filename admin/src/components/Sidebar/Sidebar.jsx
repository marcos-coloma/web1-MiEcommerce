import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
    { path: "/", label: "Principal" },
    { path: "/products", label: "Productos" },
    { path: "/analytics", label: "Estadísticas" },
    { path: "/profile", label: "Usuarios" },
];

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <h2>Dashboard</h2>

            <nav>
                <ul>

                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </nav>
        </aside>
    );
}