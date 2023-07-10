let menuBtn = document.querySelector('.header-burger-btn');
let menu = document.querySelector('.header-nav');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock')
})

/* swiper-js */














let swiper1 = new Swiper('.slide-content', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination_1>.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.pagination_1>.swiper-button-next',
    prevEl: '.pagination_1>.swiper-button-prev',
  },
});



let swiper2 = new Swiper('.slide-content-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination_2>.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.pagination_2>.swiper-button-next',
    prevEl: '.pagination_2>.swiper-button-prev',
  },
});

let swiper3 = new Swiper('.slide-content-3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination_3>.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.pagination_3>.swiper-button-next',
    prevEl: '.pagination_3>.swiper-button-prev',
  },
});


// const btnOpen = document.querySelector('.btn-open');

const btnOpen = document.querySelectorAll('.btn-open');
const btnClose = document.querySelector('.btn-close'); 
const modalWindow = document.querySelector('.modal-window-contact');


// btnOpen.addEventListener('click', function () {
//   modalWindow.classList.add('active');
//   console.log("Hello")
// });



// btnOpen.forEach(function() {
//   this.addEventListener('click', function () {
//     modalWindow.classList.add('active');
//     console.log("Hello")
//   })
// })
btnOpen.forEach((el) => {
  el.addEventListener('click', () => {
    modalWindow.classList.add('active');
  })
})
btnClose.addEventListener('click', function () {
  modalWindow.classList.remove('active');
});