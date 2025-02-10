document.addEventListener('DOMContentLoaded', () => {
  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.news-list__tabs-item');
  const contents: NodeListOf<HTMLElement> = document.querySelectorAll('.news-list__content-tab');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tab: string | null = button.getAttribute('data-tab');
      if (!tab) return;

      buttons.forEach(btn => btn.classList.remove('active'));

      contents.forEach(content => {
        content.classList.remove('active');
        (content as HTMLElement).style.display = 'none';
      });

      button.classList.add('active');

      const activeContent = document.querySelector(`.news-list__content-tab[data-tab="${tab}"]`) as HTMLElement | null;
      if (activeContent) {
        activeContent.classList.add('active');
        activeContent.style.display = 'grid';
      }
    });
  });

  const firstButton = document.querySelector('.news-list__tabs-item.active') as HTMLElement | null;
  if (firstButton) {
    firstButton.click();
  }
});
