const initAccordion = () => {
  const accordions = document.querySelectorAll('[data-accordion]');

  if (accordions) {
    accordions.forEach((accordion) => {
      const btn = accordion.querySelector('[data-accordion-btn]');

      accordion.addEventListener('click', () => {
        accordion.classList.toggle('opened');
        btn.classList.toggle('arrow-rotate');

        const closeHandler = (evt) => {
          accordion.classList.remove('opened');
          btn.classList.remove('arrow-rotate');
          evt.stopPropagation();
          document.removeEventListener('click', closeHandler, true);
        };
        document.addEventListener('click', closeHandler, true);
      });

    });
  }
};

export {initAccordion};
