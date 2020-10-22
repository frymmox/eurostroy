// Modal section
if (document.querySelector('.modal')) {
  const modalOpenSection = document.querySelector('.js-modal-section-open')
  const modalCloseSection = document.querySelector('.js-modal-section-close')
  const overlaySection = document.querySelector('.js-modal-section .modal__overlay')
  const modalSection = document.querySelector('.js-modal-section')

  modalOpenSection.addEventListener('click', () => {
    modalSection.classList.add('modal--show')
    scrollLock.disablePageScroll()
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
}

// Modal apartment
if (document.querySelector('.modal')) {
  const modalOpenApartment = document.querySelector('.js-modal-apartment-open')
  const modalCloseApartment = document.querySelector('.js-modal-apartment-close')
  const overlayApartment = document.querySelector('.js-modal-apartment .modal__overlay')
  const modalApartment = document.querySelector('.js-modal-apartment')

  modalOpenApartment.addEventListener('click', () => {
    modalApartment.classList.add('modal--show')
    scrollLock.disablePageScroll()
  })

  modalCloseApartment.addEventListener('click', () => {
    modalApartment.classList.remove('modal--show')
    scrollLock.enablePageScroll()
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
}
