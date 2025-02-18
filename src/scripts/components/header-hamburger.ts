document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector<HTMLButtonElement>('.header__hamburger-button');
  const mobileWrapper = document.querySelector<HTMLDivElement>('.header-mobile__wrapper');
  const dropdownButtons = document.querySelectorAll<HTMLButtonElement>('.mob-dropdown .dropdown__button');
  const lines = document.querySelectorAll<HTMLElement>('.header__hamburger-button .line');

  if (hamburgerButton && mobileWrapper) {
    hamburgerButton.addEventListener('click', () => {
      if (mobileWrapper.classList.contains('active')) {
        mobileWrapper.classList.remove('active');
        setTimeout(() => {
          mobileWrapper.style.display = 'none';
        }, 300);
      } else {
        mobileWrapper.style.display = 'flex';
        setTimeout(() => {
          mobileWrapper.classList.add('active');
        }, 10);
      }
      hamburgerButton.classList.toggle('open');
      lines.forEach(line => line.classList.toggle('active'));
    });
  }

  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dropdownContent = button.nextElementSibling as HTMLElement;
      if (dropdownContent) {
        dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  });
});
