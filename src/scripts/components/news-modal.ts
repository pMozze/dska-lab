document.querySelectorAll('.news-modal').forEach(newsModal => {
  newsModal.querySelector('.news-modal-header__close-button')?.addEventListener('click', () => {
    newsModal.classList.toggle('news-modal_shown', false);
  });
});

document.querySelectorAll('[data-news-modal]:not(.news-modal)').forEach(newsModalButton => {
  newsModalButton.addEventListener('click', () => {
    document
      .querySelector(`.news-modal[data-news-modal="${(newsModalButton as HTMLElement).dataset.newsModal}"]`)
      ?.classList.toggle('news-modal_shown');
  });
});
