let swiper = new Swiper('.featured', {
  slidesPerView: 3,
  spaceBetween: 30,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.featured-button-next',
    prevEl: '.featured-button-prev',
  },
});

 let nextSwiper = new Swiper ('.clients-swipe', {
  slidesPerView: 6,
  spaceBetween: 10,
  watchOverflow: true,
  navigation: {
    nextEl: '.clients-button-next',
    prevEl: '.clients-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    // when window width is >= 1100px
    1100: {
      slidesPerView: 6,
      spaceBetween: 0
    }
  },
    });

let threeSwiper = new Swiper ('.swiper-portfolio', {
slidesPerView: 4,
spaceBetween: 0,
loop: true,
pagination: {
  el: '.swiper-pagination',
},
    
breakpoints: {
// when window width is >= 320px
300: {
slidesPerView: 1,
spaceBetween: 0
        },
800: {
slidesPerView: 2,
spaceBetween: 0
},
// when window width is >= 800px
1100: {
slidesPerView: 3,
spaceBetween: 0
},
// when window width is >= 1100px
1500: {
slidesPerView: 4,
spaceBetween: 0
}
  },
    });

let fourswiper = new Swiper('.personal-swiper', {
slidesPerView: 3,
spaceBetween: 30,
watchOverflow: true,
breakpoints: {

320: {
    slidesPerView: 1,
    spaceBetween: 30
                },
// when window width is >= 320px
500: {
slidesPerView: 1,
spaceBetween: 30
            },
// when window width is >= 480px
800: {
slidesPerView: 2,
spaceBetween: 30
            },
// when window width is >= 640px
1100: {
slidesPerView: 3,
spaceBetween: 30
}
},
navigation: {
  nextEl: '.personal-button-next',
  prevEl: '.personal-button-prev',
},
});

document.querySelector (".btn-art").addEventListener ('click', function() {
  let fiveSwiper = new Swiper ('.swiper-portfolio', {
  slidesPerView: 3,
  loop: true,
  })
  });

document.querySelector (".btn-mystery").addEventListener ('click', function() {
  let sixSwiper = new Swiper ('.swiper-portfolio', {
  slidesPerView: 2,
  loop: true,
   })
  });

document.querySelector (".btn-illusion").addEventListener ('click', function() {
  let sevenSwiper = new Swiper ('.swiper-portfolio', {
  slidesPerView: 4,
  loop: true,
    })
  });

document.querySelector (".btn-travel").addEventListener ('click', function() {
  let eightSwiper = new Swiper ('.swiper-portfolio', {
  slidesPerView: 5,
  loopAdditionalSlides: 5,
  })
  });

document.querySelector (".btn-paintings").addEventListener ('click', function() {
  let tenSwiper = new Swiper ('.swiper-portfolio', {
  slidesPerView: 3,
  loop: true,})
  });