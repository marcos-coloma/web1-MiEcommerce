import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
        <aside>
            Sidebar
        </aside>

        <main>
            <Outlet />
        </main>
        </div>
    );
}