import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Dashboard</h2>

        <nav>
            <ul>
            <li>
                <NavLink to="/" onClick={onClose}>
                Home
                </NavLink>
            </li>
            
            <li>
                <NavLink to="/products" onClick={onClose}>
                Products
                </NavLink>
            </li>

            <li>
                <NavLink to="/categories" onClick={onClose}>
                Categories
                </NavLink>
            </li>

            <li>
                <NavLink to="/users" onClick={onClose}>
                Users
                </NavLink>
            </li>
            </ul>
        </nav>
        </aside>
    );
}