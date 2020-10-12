export default (() => {
  const portfolioWorkList = document.querySelector('.portfolio .work-list');
  const ourTeam = document.querySelector('.team .our-team');

  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('focus-off');
    portfolioWorkList.classList.remove('work-list-hover');
    ourTeam.classList.remove('our-team-hover');
  });

  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.remove('focus-off');
      portfolioWorkList.classList.add('work-list-hover');
      ourTeam.classList.add('our-team-hover');
    }
  });
})();
