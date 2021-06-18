const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 6,
    spaceBetween: 40,
    slidesOffsetAfter: 0,
    loopFillGroupWithBlank: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        centerSlidesBounds: true,
        centerSlides: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        centerSlidesBounds: true,
        centerSlides: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      1024: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  });