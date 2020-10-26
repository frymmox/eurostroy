(function() {
  if (document.querySelector(".js-view-place")) {
    document.querySelectorAll(".js-view-place").forEach((el) => {
      el.addEventListener("click", () => {
        const selector = el.getAttribute("data-target")
        if (el.firstElementChild.checked) {
          document.querySelectorAll(".slider-3d__slider").forEach((el) => {
            el.style.zIndex="1"
          })

          document.querySelector(selector).style.zIndex="2"
        }
      })
    })
  }
})();
