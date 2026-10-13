document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Message Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1700);
  });
});
