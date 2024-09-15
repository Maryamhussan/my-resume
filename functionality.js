var mobileMenu = document.getElementById("mobile-menu");
var navbarMenu = document.querySelector(".navbar__menu");
if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("active");
    });
}
