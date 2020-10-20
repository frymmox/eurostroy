const swiperPromo = new Swiper('.promo__slider', {
  pagination: {
    el: '.promo__pagination',
  },

  navigation: {
    nextEl: '.promo__next',
    prevEl: '.promo__prev',
  },
})

const swiperComplexPromo = new Swiper('.complex-promo__slider', {
  pagination: {
    el: '.complex-promo__pagination',
  },

  navigation: {
    nextEl: '.complex-promo__next',
    prevEl: '.complex-promo__prev',
  },
})

const swiperProjectCard = new Swiper('.project-card__slider', {
  pagination: {
    el: '.project-card__pagination',
    clickable: true
  },
})

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

const swiperConstructionProgress = new Swiper('.construction-progress__slider', {
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
    nextEl: '.construction-progress__next',
    prevEl: '.construction-progress__prev',
  },
})

const swiperComplexAbout = new Swiper('.complex-about-media__slider', {
  navigation: {
    nextEl: '.complex-about-media__next',
    prevEl: '.complex-about-media__prev',
  },
})

const swiperPaymentPromo = new Swiper('.payment-promo__slider', {
  navigation: {
    nextEl: '.payment-promo__next',
    prevEl: '.payment-promo__prev',
  },
})

const swiperVirtualTour = new Swiper('.slider-3d__slider', {
  navigation: {
    nextEl: '.slider-3d__next',
    prevEl: '.slider-3d__prev',
  },
})

const swiperInfrastructure = new Swiper('.infrastructure__slider', {
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
    nextEl: '.infrastructure__next',
    prevEl: '.infrastructure__prev',
  },
})