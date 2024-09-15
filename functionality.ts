const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu") as HTMLElement;

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("active");
  });
}
