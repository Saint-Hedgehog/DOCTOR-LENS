/* global Swiper*/

const initSlider = () => {
  const introSlider = new Swiper('.intro__slider', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 15,
    simulateTouch: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // pagination
    pagination: {
      el: '.intro__pagination',
      clickable: true,
      bulletClass: 'intro__pagination-item',
      bulletActiveClass: 'intro__pagination-current-item',
    },

    // Navigation arrows
    navigation: {
      clickable: true,
      nextEl: '.intro__button-next',
      prevEl: '.intro__button-prev',
    },
  });

  const doctorsSlider = new Swiper('.doctors__slider', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 15,
    simulateTouch: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
  });

  const doctorsVerticalSlider = new Swiper('.doctors__vertical-slider', {
    direction: 'vertical',
    slidesPerGroup: 1,
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 15,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    simulateTouch: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.doctors__button-next',
      prevEl: '.doctors__button-prev',
    },

    pagination: {
      el: '.doctors__pagination',
      type: 'fraction',
    },
    controller: {
      control: doctorsSlider,
    },
  });

  const aboutSlider = new Swiper('.about__slider', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 1000,
    // spaceBetween: 15,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.about__button-next',
      prevEl: '.about__button-prev',
    },
  });

  const reviewsSliderVideo = new Swiper('.reviews__slider-video', {
    slidesPerGroup: 2,
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 43,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__video-button-next',
      prevEl: '.reviews__video-button-prev',
    },

    pagination: {
      el: '.reviews__video-pagination',
      clickable: true,
      bulletClass: 'reviews__video-pagination-item',
      bulletActiveClass: 'reviews__video-pagination-current-item',
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerGroup: 2,
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 43,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    pagination: {
      el: '.reviews__pagination',
      clickable: true,
      bulletClass: 'reviews__pagination-item',
      bulletActiveClass: 'reviews__pagination-current-item',
    },
  });

  const inertHiddenSlide = (sliderName) => {
    const slides = sliderName.slides;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const items = slide.querySelectorAll('[data-tabindex]');

      if (slide.classList.contains('swiper-slide-visible')) {
        items.forEach((item) => {
          item.setAttribute('tabindex', '0');
        });
      } else {
        items.forEach((item) => {
          item.setAttribute('tabindex', '-1');
        });
      }
    }
  };

  const inertPagination = (sliderName) => {
    const paginationBullets = sliderName.pagination.bullets;
    if (paginationBullets) {
      for (let i = 0; i < paginationBullets.length; i++) {
        const paginationBullet = paginationBullets[i];

        if (paginationBullet.classList.value.includes('pagination-current-item')) {
          paginationBullet.setAttribute('tabindex', '-1');
        } else {
          paginationBullet.setAttribute('tabindex', '0');
        }
      }
    }
  };

  const inertButton = (sliderName) => {
    const nextSlide = sliderName.navigation.nextEl;
    const prevSlide = sliderName.navigation.prevEl;

    if (nextSlide && prevSlide) {
      if (nextSlide.classList.contains('swiper-button-disabled')) {
        nextSlide.setAttribute('tabindex', '-1');
      } else {
        nextSlide.setAttribute('tabindex', '0');
      }

      if (prevSlide.classList.contains('swiper-button-disabled')) {
        prevSlide.setAttribute('tabindex', '-1');
      } else {
        prevSlide.setAttribute('tabindex', '0');
      }
    }
  };

  const initTabIndex = (slider) => {
    slider.on('update init', () => {
      inertHiddenSlide(slider);
      inertPagination(slider);
      inertButton(slider);
    });

    slider.on('update progress', () => {
      inertHiddenSlide(slider);
      inertPagination(slider);
      inertButton(slider);
    });

    slider.on('update slideChange', () => {
      inertPagination(slider);
      inertButton(slider);
    });
  };

  initTabIndex(reviewsSlider);
  initTabIndex(reviewsSliderVideo);
  initTabIndex(aboutSlider);
  initTabIndex(doctorsVerticalSlider);
  initTabIndex(doctorsSlider);
  initTabIndex(introSlider);
};

export {initSlider};
