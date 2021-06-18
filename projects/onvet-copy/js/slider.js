const swiper = new Swiper('.swiper-container', {

  spaceBetween: 40,
  autoplay: {
    delay: 2000,
  },
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      centerSlidesBounds: true,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      centerSlidesBounds: true,

    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});