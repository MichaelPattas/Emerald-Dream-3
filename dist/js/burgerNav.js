const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl");

const pageBody = document.getElementById("body");
const burgerMenu = document.querySelector(".burger-nav-menu");

btn.addEventListener("click", (evt) => {
  menu.classList.toggle("active");
  menu.classList.contains("active")
    ? (pageBody.style.overflow = "hidden")
    : (pageBody.style.overflow = "visible");
  menu.classList.contains("active")
    ? (burgerMenu.style.display = "flex")
    : (burgerMenu.style.display = "none");
});
