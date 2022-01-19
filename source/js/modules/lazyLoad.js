const initLazyLoad = () => {
  const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
  const loadMapBlock = document.querySelector('.load-map'); // карта
  const windowHeight = document.documentElement.clientHeight;

  let lazyImagesPositions = [];

  if (lazyImages.length > 0) {
    lazyImages.forEach((img) => {
      if (img.dataset.src || img.dataset.srcset) {
        lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
        lazyScrollCheck();
      }
    });
  }

  window.addEventListener('scroll', lazyScroll);

  function lazyScroll() {
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
      lazyScrollCheck();
    }
    if (loadMapBlock && !loadMapBlock.classList.contains('loaded')) {
      getMap();
    }
  }

  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        (item) => scrollY > item - windowHeight
    );
    if (imgIndex >= 0) {
      if (lazyImages[imgIndex].dataset.src) {
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
        lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
        lazyImages[imgIndex].removeAttribute('data-src');
        lazyImages[imgIndex].removeAttribute('data-srcset');
      } else if (lazyImages[imgIndex].dataset.srcset) {
        lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
        lazyImages[imgIndex].removeAttribute('data-srcset');
      }

      delete lazyImagesPositions[imgIndex];
    }
  }

  function getMap() {
    const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + scrollY;

    if (scrollY > loadMapBlockPos - windowHeight) {
      const loadMapUrl = loadMapBlock.dataset.map;

      if (loadMapUrl) {
        loadMapBlock.insertAdjacentHTML(
            'beforeend',
            `<iframe title="Карта"
            src="${loadMapUrl}"
            width="1920" height="600" allowfullscreen="" loading="lazy">
          </iframe>`
        );
        loadMapBlock.classList.add('loaded');
      }
    }
  }
};

export {initLazyLoad};
