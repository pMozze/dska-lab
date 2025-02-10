const mutationObserver = new MutationObserver(entries => {
  for (let entryIndex = 0; entryIndex < entries.length; entryIndex++) {
    const entry = entries[entryIndex];
    const target = entry.target as HTMLElement;

    if (!target.classList.contains('active')) {
      continue;
    }

    target.querySelectorAll('.news-list__content-tab-item').forEach((item, itemIndex) => {
      item.animate([{ translate: '0 -25%' }, { translate: '0 0' }], {
        duration: 700 * (itemIndex + 1) * 0.5,
        easing: 'ease'
      });
    });
  }
});

mutationObserver.observe(document.querySelector('.news-list__content')!, {
  subtree: true,
  attributes: true,
  attributeFilter: ['class'],
  childList: true
});
