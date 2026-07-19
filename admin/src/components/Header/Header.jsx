import "./Header.css";

export default function Header({ onMenuClick }) {
    return (
        <header className="header">
        <button className="menu-button" onClick={onMenuClick}>
            ☰
        </button>

        <h1>Dashboard</h1>
        </header>
    );
}