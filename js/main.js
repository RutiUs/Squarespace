const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".menu__mobile-list");

menuBtn.addEventListener('click', ()=> {
  menu.classList.toggle('menu__mobile-list--active');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Accordion('.accordion-container');