// changing Header background color

const header = document.getElementById("header");
console.log(header);

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

// popuklar swipper js

var swiperPopular = new Swiper(".popular-container", {
  spaceBetween: 32,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
