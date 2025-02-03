document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown__button');
  const content = dropdown.querySelector('.dropdown-content');

  button?.addEventListener('mouseenter', () => {
    document.querySelectorAll('.dropdown_expanded').forEach(expandedDropdown => {
      expandedDropdown.classList.toggle('dropdown_expanded', false);
    });

    dropdown.classList.toggle('dropdown_expanded', true);
  });

  content?.addEventListener('mouseleave', event => {
    if (((event as MouseEvent).relatedTarget as HTMLElement)?.closest('.dropdown') === null) {
      dropdown.classList.toggle('dropdown_expanded', false);
    }
  });
});
