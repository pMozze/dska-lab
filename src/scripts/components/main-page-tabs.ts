document.addEventListener('DOMContentLoaded', () => {
  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.hero-buttons__item');
  const heroSection = document.querySelector('.hero') as HTMLElement;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tab: string | null = button.getAttribute('data-tab');
      const imgUrl: string | null = button.getAttribute('data-img-url');
      if (!tab) return;

      const activeContent = document.querySelector('.hero-body.active') as HTMLElement | null;
      const newContent = document.querySelector(`.hero-body[data-tab="${tab}"]`) as HTMLElement | null;

      if (activeContent && newContent && activeContent !== newContent) {
        activeContent.style.transition = 'opacity 0.3s ease-in-out';
        newContent.style.transition = 'opacity 0.3s ease-in-out';

        activeContent.style.opacity = '1';
        newContent.style.opacity = '0.1';
        newContent.hidden = false;
        newContent.classList.add('active');

        requestAnimationFrame(() => {
          activeContent.style.opacity = '0.9';
          newContent.style.opacity = '1';
        });

        activeContent.addEventListener(
          'transitionend',
          () => {
            activeContent.hidden = true;
            activeContent.classList.remove('active');
            newContent.classList.add('active');
          },
          { once: true }
        );
      }

      buttons.forEach(btn => btn.classList.remove('hero-buttons__item_active'));
      button.classList.add('hero-buttons__item_active');

      if (imgUrl) {
        heroSection.style.backgroundImage = `url('${imgUrl}')`;
      }
    });
  });

  const firstButton = document.querySelector('.hero-buttons__item.hero-buttons__item_active') as HTMLElement | null;
  if (firstButton) {
    firstButton.click();
  }
});
