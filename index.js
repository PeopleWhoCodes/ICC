const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav .sidebar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// MAIN.JS for Loading 

var image = new Array(
    "/Marvel_Loading/assets/black_panther.png",
    "/Marvel_Loading/assets/captain_america.png",
    "/Marvel_Loading/assets/doctor_strange.png",
    "/Marvel_Loading/assets/thor.png",
    "/Marvel_Loading/assets/black_widow.png",
    "/Marvel_Loading/assets/hulk.png",
    "/Marvel_Loading/assets/hawk_eye.png",
    "/Marvel_Loading/assets/iron_man.png",
);

var count = 0;
var length = image.length - 1;

function imageSlider(index) {
    count = count + index;

    if (count > length) {
        count = 0;
    }

    if (count < 0) {
        count = length;
    }

    document.IccLogo.src = image[count];

    return false;
}


autoSlideShow();

function autoSlideShow() {
    setInterval("imageSlider(1)", 300);
}