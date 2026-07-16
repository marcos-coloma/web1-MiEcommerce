import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
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

                <Header onMenuClick={() => setIsOpen(!isOpen)} />

                <div className="content">
                    <Outlet />
                </div>

            </main>

        </div>
    );
}