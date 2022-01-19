const initTabs = () => {
  const about = document.querySelector('.about');
  const reviews = document.querySelector('.reviews');
  const map = document.querySelector('.map');

  const init = (section, header, content) => {
    header.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        header.forEach(function (btn) {
          btn.classList.remove('active');
          btn.removeAttribute('tabindex');
        });
        item.classList.add('active');
        item.setAttribute('tabindex', '-1');

        content.forEach(function (button) {
          button.classList.add('hidden');
        });

        const contentBox = section.querySelector('#' + evt.target.dataset.tab);
        contentBox.classList.remove('hidden');
      });
    });
  };

  if (about) {
    const tabHeadersAbout = about.querySelectorAll('[data-tab]');
    const contentBoxesAbout = about.querySelectorAll('[data-tab-content]');

    init(about, tabHeadersAbout, contentBoxesAbout);
  }

  if (reviews) {
    const tabHeadersReviews = reviews.querySelectorAll('[data-tab]');
    const contentBoxesReviews = reviews.querySelectorAll('[data-tab-content]');

    init(reviews, tabHeadersReviews, contentBoxesReviews);
  }

  if (map) {
    const tabHeadersMap = map.querySelectorAll('[data-tab]');
    const contentBoxesMap = map.querySelectorAll('[data-tab-content]');

    init(map, tabHeadersMap, contentBoxesMap);
  }

};

export {initTabs};
