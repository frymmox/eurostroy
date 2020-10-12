const swiperImplementedProject = new Swiper('.implemented-project__slider', {
  slidesPerView: 1,
  spaceBetween: 40,

  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.implemented-project__next',
    prevEl: '.implemented-project__prev',
  },
})

const swiperVideo = new Swiper('.video__slider', {
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.video__next',
    prevEl: '.video__prev',
  },
})

const swiperNews = new Swiper('.news__slider', {
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
})

const inputPhones = document.querySelectorAll('.input-phone')

if(inputPhones) {
  Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhones)
}
