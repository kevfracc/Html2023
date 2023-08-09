document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuBar = document.querySelector(".menu-bar");

    menuToggle.addEventListener("click", function () {
        menuBar.classList.toggle("menu-open");
        menuToggle.classList.toggle("button-open");
    });
});
