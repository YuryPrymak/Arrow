export default (() => {
  const nav = document.querySelector('.nav-wrapper');
  const startStickSince = document.querySelector('main');

  const stickyNavToggle = () => {
    if(startStickSince === null) {
      return;
    }

    const condition = window.pageYOffset >= startStickSince.offsetTop && window.innerWidth > 1024;
    condition ? nav.classList.add('sticky-nav') : nav.classList.remove('sticky-nav');
  };

  window.addEventListener('load', stickyNavToggle);
  window.addEventListener('scroll', stickyNavToggle);
  window.addEventListener('resize', stickyNavToggle);
})();
