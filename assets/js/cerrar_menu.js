document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector('a[href="#menu"]');
  const overlay = document.getElementById("menu-overlay");

  if (!menu || !toggle) return;

  const closeMenu = () => {
    menu.classList.remove("visible");
  };

  const toggleMenu = () => {
    menu.classList.toggle("visible");
  };

  // Clic en el botón "Menu"
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // Cerrar al hacer clic fuera del menú o en el overlay
  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("visible") &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Cerrar al hacer clic en enlaces del menú
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});