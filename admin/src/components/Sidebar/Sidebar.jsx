import { NavLink } from "react-router-dom";
import profileImage from "../../assets/images/profile.webp";
import "./Sidebar.css";


const navItems = [
    { path: "/", label: "Principal" },
    { path: "/products", label: "Productos" },
    { path: "/categories", label: "Categorías" },
    { path: "/analytics", label: "Estadísticas" },
];



const userItem = {
    path: "/profile",
    label: "Usuarios",
};

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>

            <div className="sidebar__header">
                <h2>MiEccomerce</h2>
            </div>


            <nav className="sidebar__nav">

                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

            </nav>

            <div className="sidebar__profile">

                <NavLink
                    to={userItem.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                        `profile-card ${isActive ? "active" : ""}`
                    }
                >

                    <img 
                        className="profile-card__image"
                        src={profileImage}
                        alt="Perfil"
                    />

                    <div className="profile-card__info">
                        <h4>Usuario</h4>
                        <span>Administrador</span>
                    </div>

                </NavLink>

            </div>

        </aside>
    );
}