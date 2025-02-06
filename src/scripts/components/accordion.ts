document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-section__header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling as HTMLElement;
      const btn = header.querySelector('.accordion-section__header-btn') as HTMLElement;

      if (content) {
        if (content.style.maxHeight) {
          content.style.maxHeight = '0';
          content.style.opacity = '0';

          btn.classList.remove('rotated');

          content.addEventListener('transitionend', function onTransitionEnd() {
            content.classList.add('hidden');
            content.style.removeProperty('max-height');
            content.removeEventListener('transitionend', onTransitionEnd);
          });
        } else {
          content.classList.remove('hidden');
          content.style.opacity = '0';
          content.style.maxHeight = '0';

          requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            btn.classList.add('rotated');
          });
        }
      }
    });
  });
});
