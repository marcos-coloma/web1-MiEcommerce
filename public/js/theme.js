document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeToggle");
    const saved = localStorage.getItem("theme");


    if (saved === "dark") {
        document.body.classList.add("dark");
    }

    if (!btn) {
        return;
    }

    btn.addEventListener("click", (e) => {

        e.preventDefault();
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});