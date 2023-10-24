import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper

function swiperFunc () {
  const config = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    }
  }

  swiper = new Swiper('.swiper-anywhere', config)
} 

const breakpoint = window.matchMedia('(max-width:807px)')

const breakpointChecker = function () {
  if (breakpoint.matches  === true) {
    console.log('YES')
    swiperFunc()
    return
  } else if (breakpoint.matches === false) {
    console.log('NO')
    if (swiper !== undefined) swiper.destroy(true, true)
    return
  }
}

breakpoint.addListener(breakpointChecker)
breakpointChecker()


export default swiperFunc