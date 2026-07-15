import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import "./DashboardLayout.css";


export default function DashboardLayout() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="layout">

            <Sidebar 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            {isOpen && (
                <div 
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <main className="main">

                <button 
                    className="menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <Outlet />

            </main>

        </div>
    );
}