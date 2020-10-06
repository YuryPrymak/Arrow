export default (() => {
  const logo = document.querySelector('.header .logo');
  const nav = document.querySelector('.nav');
  const btnScrollDown = document.querySelector('.btn-scroll-down');

  const smoothScroll = el => {
    el.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  const scrollTo = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);

    if(el === null) {
      return;
    }

    smoothScroll(el);
  };

  const navScroll = e => {
    if(e.target && e.target.nodeName === 'A') {
      e.preventDefault();
      const scrollToEl = document.querySelector(e.target.getAttribute('href'));

      if(scrollToEl === null) {
        return;
      }

      smoothScroll(scrollToEl);
    }
  };

  logo.addEventListener('click', e => scrollTo(e, 'header'));
  nav.addEventListener('click', e => navScroll(e));
  btnScrollDown.addEventListener('click', e => scrollTo(e, 'main'));
})();
