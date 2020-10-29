(function() {
  if (document.querySelector(".js-view-map")) {
    document.querySelector(".js-view-map").addEventListener("click", () => {
      document.querySelector(".js-view-map").classList.toggle("js-view-map--show")
      document.querySelector(".infrastructure__map").classList.toggle("infrastructure__map--show")
    })
  }

  if (document.querySelector(".js-view-infrastructure-object")) {
    document.querySelectorAll(".js-view-infrastructure-object").forEach((el) => {
      el.addEventListener("click", () => {
        const selector = el.getAttribute("data-target")
        if (el.firstElementChild.checked) {
          document.querySelectorAll(".infrastructure-map__item").forEach((el) => {
            el.style.zIndex="1"
          })

          document.querySelector(selector).style.zIndex="2"
        }
      })
    })
  }
})();
