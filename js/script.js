let mySwiper =new Swiper('.client',  {
  slidesPerView: 6,
  spaceBetween: 5,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let swiper = new Swiper('.swiper-portfolio',  {
  slidesPerView: 3,
  pagination: {
    el: '.porfolio-pagination',
    clickable: true,
  },
});