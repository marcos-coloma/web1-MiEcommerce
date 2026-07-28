import menuIcon from "../../assets/icons/menu.svg";
import "./Header.css";

export default function Header({ onMenuClick }) {
    return (
        <header className="header">

            <button 
                className="menu-button" 
                onClick={onMenuClick}
            >
                <img 
                    src={menuIcon}
                    alt="Menu"
                />
            </button>


            <h1>Dashboard</h1>


        </header>
    );
}