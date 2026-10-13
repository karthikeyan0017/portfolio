const links = document.querySelectorAll('.main-nav a');

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

links.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPath) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
