const initApp = () => {
  const burgerMenuBtn = document.getElementById("burger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconBurger = document.getElementById("icon-burger");
  const iconClose = document.getElementById("icon-close");
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    iconBurger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  };

  burgerMenuBtn.addEventListener("click", () => {
    toggleMenu();
  });
  mobileMenu.addEventListener("click", () => {
    toggleMenu();
  });
};

document.addEventListener("DOMContentLoaded", initApp);
