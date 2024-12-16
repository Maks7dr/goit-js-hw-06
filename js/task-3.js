document.addEventListener('DOMContentLoaded', () => {
  let swiper;

  function initSwiper() {
    if (window.innerWidth < 1280 && !swiper) {
      swiper = new Swiper('.reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else if (window.innerWidth >= 1280 && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  // Ініціалізація слайдера при завантаженні сторінки
  initSwiper();

  // Динамічна перевірка розміру вікна
  window.addEventListener('resize', initSwiper);
});
