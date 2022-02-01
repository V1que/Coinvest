// const swiper1 = new Swiper(".mySwiper", {
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   effect: "fade",
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-next",
//     prevEl: ".swiper-prev",
//   },
// });
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
