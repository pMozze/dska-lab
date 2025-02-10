const modal = document.getElementById('modal') as HTMLElement;
const body = document.body as HTMLElement;

function openModal() {
  modal.style.display = 'flex';
  modal.classList.remove('hide');
  modal.classList.add('show');
  body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');

  modal.addEventListener(
    'animationend',
    () => {
      modal.classList.remove('hide');
      modal.style.display = 'none';
      body.style.overflow = 'auto';
    },
    { once: true }
  );
}

function handleClick(event: Event) {
  const target = event.target as HTMLElement;

  if (target.classList.contains('open-modal-btn')) {
    openModal();
  }

  if (target.classList.contains('close-modal-btn') || target === modal) {
    closeModal();
  }
}

document.addEventListener('click', handleClick);
