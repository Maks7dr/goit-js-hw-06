document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1, // За замовчуванням 1 картка
    spaceBetween: 16, // Відстань між картками
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // На планшетах показувати 2 картки
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3, // На десктопі показувати всі 3 картки
        spaceBetween: 32,
        enabled: false, // Вимикаємо слайдер
      },
    },
  });
});
