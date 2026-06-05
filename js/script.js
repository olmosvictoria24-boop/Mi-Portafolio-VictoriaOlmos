// ==========================================
// CONTROLES DE TEMA (Modo Oscuro / Claro)
// ==========================================
const boton = document.getElementById("modo-oscuro");

// Sincroniza tanto el body como el html para el empaque visual
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.documentElement.classList.add("dark-mode"); // Controla el fondo externo del html
    if (boton) boton.textContent = "☀️";
}

if (boton) {
    boton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.documentElement.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            boton.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            boton.textContent = "🌙";
        }
    });
}

// ==========================================
// MENÚ MÓVIL (Corregido y Limpio)
// ==========================================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // CORREGIDO: Se eliminó el espacio rebelde en el nombre de la variable
    const linksMenu = menu.querySelectorAll("a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// ==========================================
// INTERACCIÓN DE HEADER INTELIGENTE (Scroll)
// ==========================================
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "2px 0"; // Se vuelve un tantito más compacto al bajar
            header.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.12)";
        } else {
            header.style.padding = ""; // Regresa a su tamaño original arriba
            header.style.boxShadow = "";
        }
    });
}