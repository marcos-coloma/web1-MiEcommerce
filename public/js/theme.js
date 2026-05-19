document.addEventListener("DOMContentLoaded", () => {
    console.log("[THEME] script cargado");

    const btn = document.getElementById("themeToggle");

    console.log("[THEME] botón encontrado:", btn);

    const saved = localStorage.getItem("theme");
    console.log("[THEME] storage inicial:", saved);

    if (saved === "dark") {
        document.body.classList.add("dark");
        console.log("[THEME] dark mode aplicado desde storage");
    }

    if (!btn) {
        console.log("[THEME] NO HAY BOTÓN - saliendo");
        return;
    }

    btn.addEventListener("click", (e) => {
        console.log("[THEME] CLICK DETECTADO");

        e.preventDefault();

        const isDark = document.body.classList.toggle("dark");

        console.log("[THEME] dark mode ahora:", isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");

        console.log("[THEME] storage guardado:", localStorage.getItem("theme"));
    });
});