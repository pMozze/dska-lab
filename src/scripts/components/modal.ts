const modal = document.getElementById('modal') as HTMLElement;
const successModal = document.getElementById('success-modal') as HTMLElement;
const body = document.body as HTMLElement;

function openModal() {
  modal.style.display = 'flex';
  modal.classList.remove('hide');
  modal.classList.add('show');
  body.style.overflow = 'hidden';
}

function openSuccessModal() {
  successModal.style.display = 'flex';
  successModal.classList.remove('hide');
  successModal.classList.add('show');
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

function closeSuccessModal() {
  successModal.classList.remove('show');
  successModal.classList.add('hide');

  successModal.addEventListener(
    'animationend',
    () => {
      successModal.classList.remove('hide');
      successModal.style.display = 'none';
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

  if (target.classList.contains('open-success-modal-btn')) {
    openSuccessModal();
  }

  if (target.classList.contains('close-modal-btn') || target === modal) {
    closeModal();
  }

  if (target.classList.contains('close-success-modal-btn') || target === successModal) {
    closeSuccessModal();
  }
}

document.addEventListener('click', handleClick);
