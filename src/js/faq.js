(function() {
  if (document.querySelector(".js-faq")) {
    document.querySelectorAll(".js-faq").forEach((el) => {
      el.addEventListener("click", () => {
        const selector = el.getAttribute("data-target")
        if (el.firstElementChild.checked) {
          el.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll(".faq__answer").forEach((el) => {
            el.classList.remove("faq__answer--active")
          })

          document.querySelector(selector).classList.add("faq__answer--active")
        }
      })
    })
  }
})();
