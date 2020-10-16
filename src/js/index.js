const inputPhones = document.querySelectorAll('.input-phone')

if(inputPhones) {
  Inputmask({"mask": "+7(999) 999-99-99"}).mask(inputPhones)
}
