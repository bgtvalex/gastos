import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function slider () {
  const swiper = new Swiper('.swiper-recognized', {
    slidesPerView: 5,
    spaceBetween: 30,
    // freeMode: true,
    grabCursor: true,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

}


export default slider