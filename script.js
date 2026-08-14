document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const modal = document.getElementById('menu-modal');
  const modalClose = document.getElementById('modal-close');
  const passwordToggle = document.getElementById('password-toggle');
  const passwordInput = document.getElementById('password');
  const form = document.getElementById('order-form');

  // Open modal
  menuBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  // Close when clicking overlay
  modal.querySelector('.modal__overlay').addEventListener('click', closeModal);

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Password show/hide
  passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    passwordToggle.textContent = isPassword ? 'Hide' : 'Show';
  });

  // Fake form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created! (This is a demo – no data was sent.)');
    form.reset();
  });
});