export default (() => {
  const slider = document.querySelector('.clients .testimonials-slider');
  const slides = slider.querySelectorAll('.testimonial');
  const btnPrevSlide = document.querySelector('.testimonials-wrapper .btn-prev-slide');
  const btnNextSlide = document.querySelector('.testimonials-wrapper .btn-next-slide');
  const companyListWrapper = document.querySelector('.clients .company-list');
  const companyList = document.querySelectorAll('.clients .company-list .company');
  let currentSlide = 0;
  const animationPrev = 'prev';
  const animationNext = 'next';

  const changeSlide = i => {
    const animation = i < currentSlide ? animationPrev : animationNext;

    slides[currentSlide].classList.remove('show-prev-slide');
    slides[currentSlide].classList.remove('show-next-slide');
    slides[currentSlide].classList.add(`hide-${animation}-slide`);
    companyList[currentSlide].classList.remove('active');

    currentSlide = i;

    slides[currentSlide].classList.remove('hidden-slide');
    slides[currentSlide].classList.remove('hide-prev-slide');
    slides[currentSlide].classList.remove('hide-next-slide');
    slides[currentSlide].classList.add(`show-${animation}-slide`);
    companyList[currentSlide].classList.add('active');
  };

  const prevSlide = () => {
    const slideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

    changeSlide(slideIndex);
  };

  const nextSlide = () => {
    const slideIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

    changeSlide(slideIndex);
  };

  btnPrevSlide.addEventListener('click', prevSlide);
  btnNextSlide.addEventListener('click', nextSlide);
  companyListWrapper.addEventListener('click', e => {
    e.preventDefault();

    if(e.target && e.target.closest('.company')) {
      const companyIndex = e.target.closest('.company').dataset.index;
      changeSlide(+companyIndex);
    }
  });

  companyList.forEach((company, i) => {
    company.dataset.index = i;
    slides[i].dataset.index = i;
  });
})();
