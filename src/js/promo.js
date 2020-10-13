let marginPromo = (document.documentElement.clientWidth - 1140) / 2
document.documentElement.style.setProperty('--promo-margin', `${marginPromo}px`)

window.addEventListener('resize', () => {
  marginPromo = (document.documentElement.clientWidth - 1140) / 2
  document.documentElement.style.setProperty('--promo-margin', `${marginPromo}px`)
})
