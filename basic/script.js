const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (toggleButton && navMenu) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
}
