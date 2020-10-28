(function() {
  if (document.querySelector(".tabs-link__target")) {
    document.querySelectorAll(".tabs-link__target").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelectorAll(".tabs-link__target").forEach((el) => {
          el.classList.remove("tabs-link__target--active")
        })

        el.classList.add("tabs-link__target--active")
      })
    })
  }
})();
