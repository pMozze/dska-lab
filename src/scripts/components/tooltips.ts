document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.docs_block__grid-doc-item');

  items.forEach(item => {
    const svg = item.querySelector('.tn-atom__pin-icon');
    const info = item.querySelector('.docs_block__grid-doc-item_info');

    if (svg && info) {
      svg.addEventListener('mouseenter', () => {
        info.classList.add('visible');
      });

      svg.addEventListener('mouseleave', () => {
        info.classList.remove('visible');
      });
    }
  });
});
