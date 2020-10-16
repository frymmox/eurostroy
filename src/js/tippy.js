(function() {
  if (document.querySelectorAll('[data-tippy-content]')) {
    tippy('[data-tippy-content]',{
      placement: 'bottom-start',
    })

    if (document.querySelector('.show-tooltip')) {
      const instance = tippy(document.querySelector('.show-tooltip'), {
        placement: 'bottom-start',
      })

      instance.show();

      document.querySelectorAll('[data-tippy-content]').forEach((el) => {
        el.addEventListener("mouseenter", () => {
          instance.hide()
        })
      })
    }
  }
})();
