$(document).ready(function (events, handler) {

  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button_next',
      prevEl: '.hotel-slider__button_prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    allowTouchMove: true
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
  });

  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    const modalOverlay = $('.modal__overlay');
    const modalDialog = $('.modal__dialog');
    const body = $('body');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    body.addClass('overflow');
  }

  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $('.modal__overlay');
    const modalDialog = $('.modal__dialog');
    const body = $('body');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    body.removeClass('overflow');
  }

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal(event);
    }
   })
});
