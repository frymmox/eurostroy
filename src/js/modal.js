if (document.querySelector('.js-modal')) {
  // Modal section
  const modalOpenSectionArray = [...document.querySelectorAll('.js-modal-section-open')]
  const modalCloseSection = document.querySelector('.js-modal-section-close')
  const overlaySection = document.querySelector('.js-modal-section .modal__overlay')
  const modalSection = document.querySelector('.js-modal-section')

  modalOpenSectionArray.forEach((el) => {
    el.addEventListener('click', () => {
      modalSection.classList.add('modal--show')
      scrollLock.disablePageScroll()
    })
  })

  modalCloseSection.addEventListener('click', () => {
    modalSection.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  overlaySection.addEventListener('click', () => {
    modalSection.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalSection.classList.remove('modal--show')
      scrollLock.enablePageScroll()
    }
  })

  // Modal apartment
  const modalOpenApartmentArray = [...document.querySelectorAll('.chessboard__item:not(.chessboard__item--floor):not(.chessboard__item--sold):not(.chessboard__item--booked)')]
  const modalCloseApartment = document.querySelector('.js-modal-apartment-close')
  const modalBackApartment = document.querySelector('.js-modal-apartment-back')
  const overlayApartment = document.querySelector('.js-modal-apartment .modal__overlay')
  const modalApartment = document.querySelector('.js-modal-apartment')

  modalOpenApartmentArray.forEach((el) => {
    el.addEventListener('click', () => {
      modalApartment.classList.add('modal--show')
      modalSection.classList.remove('modal--show')
    })
  })

  modalCloseApartment.addEventListener('click', () => {
    modalApartment.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  modalBackApartment.addEventListener('click', () => {
    modalApartment.classList.remove('modal--show')
    modalSection.classList.add('modal--show')
  })

  overlayApartment.addEventListener('click', () => {
    modalApartment.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalApartment.classList.remove('modal--show')
      scrollLock.enablePageScroll()
    }
  })

  // Modal apartment form
  const modalOpenApartmentForm = document.querySelector('.js-modal-apartment-form-open')
  const modalCloseApartmentForm = document.querySelector('.js-modal-apartment-form-close')
  const modalBackApartmentForm = document.querySelector('.js-modal-apartment-form-back')
  const overlayApartmentForm = document.querySelector('.js-modal-apartment-form .modal__overlay')
  const modalApartmentForm = document.querySelector('.js-modal-apartment-form')

  modalOpenApartmentForm.addEventListener('click', () => {
    modalApartment.classList.remove('modal--show')
    modalApartmentForm.classList.add('modal--show')
  })

  modalCloseApartmentForm.addEventListener('click', () => {
    modalApartmentForm.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  modalBackApartmentForm.addEventListener('click', () => {
    modalApartmentForm.classList.remove('modal--show')
    modalApartment.classList.add('modal--show')
  })

  overlayApartmentForm.addEventListener('click', () => {
    modalApartmentForm.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalApartmentForm.classList.remove('modal--show')
      scrollLock.enablePageScroll()
    }
  })

  // Modal apartment submitted
  const modalOpenRequestSubmitted = document.querySelector('.js-modal-request-submitted-open')
  const modalCloseRequestSubmitted = document.querySelector('.js-modal-request-submitted-close')
  const overlayRequestSubmitted = document.querySelector('.js-modal-request-submitted .modal__overlay')
  const modalRequestSubmitted = document.querySelector('.js-modal-request-submitted')

  modalOpenRequestSubmitted.addEventListener('click', () => {
    modalApartmentForm.classList.remove('modal--show')
    modalRequestSubmitted.classList.add('modal--show')
  })

  modalCloseRequestSubmitted.addEventListener('click', () => {
    modalRequestSubmitted.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  overlayRequestSubmitted.addEventListener('click', () => {
    modalRequestSubmitted.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  })

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalRequestSubmitted.classList.remove('modal--show')
      scrollLock.enablePageScroll()
    }
  })
}

// Modal full
if (document.querySelector('.js-modal-full')) {
  const modalOpenFullArray = [...document.querySelectorAll('.js-modal-full-open')]
  const modalCloseFullArray = [...document.querySelectorAll('.js-modal-full-close')]
  const modalOpenFullNextArray = [...document.querySelectorAll('.js-modal-full-open-next')]

  modalOpenFullArray.forEach((el) => {
    el.addEventListener('click', () => {
      const selector = el.getAttribute("data-target")

      document.querySelector(selector).classList.add('modal--active')
      scrollLock.disablePageScroll()
    })
  })

  modalOpenFullNextArray.forEach((el) => {
    el.addEventListener('click', () => {
      const selector = el.getAttribute("data-target")

      document.querySelectorAll(".js-modal-full").forEach((el) => {
        el.classList.remove('modal--active')
      })

      setTimeout(() => {
        document.querySelector(selector).classList.add('modal--active')
      }, 350)

    })
  })

  modalCloseFullArray.forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll(".js-modal-full").forEach((el) => {
        el.classList.remove('modal--active')
      })

      scrollLock.enablePageScroll()
    })
  })
}

// Modal tour
if (document.querySelector('.js-modal-tour')) {
  const modalOpenTour = document.querySelector('.js-modal-tour-open')
  const modalCloseTour = document.querySelector('.js-modal-tour-close')
  const modalTour = document.querySelector('.js-modal-tour')

  modalOpenTour.addEventListener('click', () => {
    modalTour.classList.add('modal--active')
    scrollLock.disablePageScroll()
  })

  modalCloseTour.addEventListener('click', () => {
    modalTour.classList.remove('modal--active')
    scrollLock.enablePageScroll()
  })
}

// Modal panorama
if (document.querySelector('.js-modal-panorama')) {
  const modalOpenPanorama = document.querySelector('.js-modal-panorama-open')
  const modalClosePanorama = document.querySelector('.js-modal-panorama-close')
  const modalPanorama = document.querySelector('.js-modal-panorama')

  modalOpenPanorama.addEventListener('click', () => {
    modalPanorama.classList.add('modal--active')
    scrollLock.disablePageScroll()
  })

  modalClosePanorama.addEventListener('click', () => {
    modalPanorama.classList.remove('modal--active')
    scrollLock.enablePageScroll()
  })
}

// Modal map
if (document.querySelector('.js-modal-map')) {
  const modalOpenMap = document.querySelector('.js-modal-map-open')
  const modalCloseMap = document.querySelector('.js-modal-map-close')
  const modalMap = document.querySelector('.js-modal-map')

  modalOpenMap.addEventListener('click', () => {
    modalMap.classList.add('modal--active')
    scrollLock.disablePageScroll()
  })

  modalCloseMap.addEventListener('click', () => {
    modalMap.classList.remove('modal--active')
    scrollLock.enablePageScroll()
  })
}
