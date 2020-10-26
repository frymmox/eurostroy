if (document.querySelector('.form-slider')) {
  const sliderPrice = document.querySelector('.js-slider-price')
  const sliderArea = document.querySelector('.js-slider-area')

  const nodesPrice = [
    document.querySelector('.js-lower-price'),
    document.querySelector('.js-upper-price')
  ]

  const nodesArea = [
    document.querySelector('.js-lower-area'),
    document.querySelector('.js-upper-area')
  ]

  noUiSlider.create(sliderPrice, {
    start: [3000000, 4500000],
    connect: true,
    range: {
      'min': 2500000,
      'max': 5000000
    },
    format: {
      to: (value) => Number(value).toFixed(0),
      from: (value) => Number(value).toFixed(0)
    },
  })

  noUiSlider.create(sliderArea, {
    start: [35, 88],
    connect: true,
    range: {
      'min': 30,
      'max': 90
    },
    format: {
      to: (value) => Number(value).toFixed(1),
      from: (value) => Number(value).toFixed(1)
    }
  })

  sliderPrice.noUiSlider.on('update', function (values, handle) {
    nodesPrice[handle].innerHTML = values[handle];
  })

  sliderArea.noUiSlider.on('update', function (values, handle) {
    nodesArea[handle].innerHTML = values[handle];
  })
}
