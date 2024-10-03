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
    loop: true, // Ativa o loop infinito
    slidesPerView: 3, // Mostra 3 players por vez 
    slidesPerGroup: 1, // Avança de um player por vez
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    //   },
});
