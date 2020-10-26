if (document.querySelector('.chosen-apartment')) {
  const viewApartment = document.querySelector('.js-view-apartment')
  const viewFloor = document.querySelector('.js-view-floor')

  viewApartment.addEventListener('click', () => {
    if (viewApartment.firstElementChild.checked) {
      document.querySelector('.chosen-apartment__image').lastElementChild.style.display='none'
      document.querySelector('.chosen-apartment__image').firstElementChild.style.display='block'
    }
  })

  viewFloor.addEventListener('click', () => {
    if (viewFloor.firstElementChild.checked) {
      document.querySelector('.chosen-apartment__image').firstElementChild.style.display='none'
      document.querySelector('.chosen-apartment__image').lastElementChild.style.display='block'
    }
  })
}
