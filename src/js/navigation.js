export default (() => {
  const nav = document.querySelector('.nav');
  const btnToggle = document.querySelector('.nav .btn-nav-toggle');
  const btnSvg = document.querySelector('.nav .btn-nav-toggle svg');
  let navIsClosed = true;

  const openNav = function() {
    navIsClosed = false;
    btnSvg.classList.remove('btn-toggle-svg-close');
    btnSvg.classList.add('btn-toggle-svg-open');
    nav.classList.add('nav-toggle');
  };

  const closeNav = function() {
    navIsClosed = true;
    btnSvg.classList.remove('btn-toggle-svg-open');
    btnSvg.classList.add('btn-toggle-svg-close');
    nav.classList.remove('nav-toggle');
  };

  btnToggle.addEventListener('click', () => {
    navIsClosed ? openNav() : closeNav();
  });

  nav.addEventListener('click', e => {
    if(e.target && e.target.nodeName === 'A') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    closeNav();
    btnSvg.classList.remove('btn-toggle-svg-open');
    btnSvg.classList.remove('btn-toggle-svg-close');
  });
})();
