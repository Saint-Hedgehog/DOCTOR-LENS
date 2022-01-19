const initDiagrams = () => {
  window.onload = function () {
    const yandex = document.querySelector('#yandex');
    const gis = document.querySelector('#gis');
    const prodoctorov = document.querySelector('#prodoctorov');
    const flamp = document.querySelector('#flamp');
    const google = document.querySelector('#google');
    const company = [yandex, gis, prodoctorov, flamp, google];

    if (company) {
      company.forEach((element) => {
        const percent = element.dataset.completeness;
        const ctx = element.getContext('2d');
        ctx.lineWidth = 7;
        ctx.strokeStyle = 'rgba(51, 193, 204, 0.26)';
        ctx.fillStyle = '#2a2651';
        const endAngle = (Math.PI * percent * 2 / 100);
        ctx.arc(35, 35, 31, -(Math.PI / 180 * 90), endAngle - (Math.PI / 180 * 90), false);
        ctx.stroke();
        ctx.font = 'normal 18px Muller';
        ctx.fillText(percent + '%', 14, 40);
      });
    }
  };
};

export {initDiagrams};
