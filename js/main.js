var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints:{
      320:{
        slidesPerView: 1.1,
      },
      768:{
        slidesPerView: 2.1,
      },
      991:{
        slidesPerView: 2.5,
      },
      1200:{
        slidesPerView: 3.5,
      },
    }
  });
AOS.init({
  duration: 1000,
  once: true,
});