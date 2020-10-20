(function() {
  if (document.querySelector(".js-collapse-card-toggle")) {
    document.querySelectorAll(".js-collapse-card-toggle").forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("collapse-card__title--show")
        const selector = el.getAttribute("data-target-card")

        document.querySelector(selector).classList.toggle("collapse-card__collapse--show")
      })
    })
  }
})();
