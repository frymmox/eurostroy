const swiperImplementedProject = new Swiper('.implemented-project', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.implemented-project__next',
    prevEl: '.implemented-project__prev',
  },
});
