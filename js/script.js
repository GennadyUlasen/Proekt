let mySwiper =new Swiper('.client',  {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.button-clients-next',
    prevEl: '.button-clients-prev',
  },
  
});


var swiper = new Swiper('.swiper-portfolio', {
  pagination: {
    el: '.swiper-pagination',
  },
});

let featuredSwiper =new Swiper('.featured',  {
  slidesPerView: 1,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.featured-button-next',
    // prevEl: '.featured-button-prev',
  },
});
