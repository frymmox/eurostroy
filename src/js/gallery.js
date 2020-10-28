(function() {
  if (document.querySelector('.complex-about-media__card--gallery')) {
    const targetGallery = document.querySelector('.complex-about-media__card--gallery')
    targetGallery.addEventListener('click', () => {
      $.fancybox.open([
        {
          src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
          opts : {
            caption : 'First caption',
            thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
          }
        },
        {
          src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts : {
            caption : 'Second caption',
            thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
          }
        }
      ], {
        loop : true,
      });
    })
  }

  if (document.querySelector('.city-content__card--gallery')) {
    const targetGallery = document.querySelector('.city-content__card--gallery')
    targetGallery.addEventListener('click', () => {
      $.fancybox.open([
        {
          src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
          opts : {
            caption : 'First caption',
            thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
          }
        },
        {
          src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts : {
            caption : 'Second caption',
            thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
          }
        }
      ], {
        loop : true,
      });
    })
  }
})();
