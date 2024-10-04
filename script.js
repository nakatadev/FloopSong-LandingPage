const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });

const swiper2 = new Swiper('.swiper-container', {
    direction: 'horizontal', // Direção horizontal
    loop: true,
    slidesPerView: 3, 
    slidesPerGroup: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});
