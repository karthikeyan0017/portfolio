document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('menu');
const links = document.getElementById('navlinks');

menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close ×' : 'Menu ☰';
});

links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = 'Menu ☰';
  });
});

document.getElementById('copyEmail').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('karthikeyan224488@gmail.com');
    status.textContent = 'EMAIL COPIED TO CLIPBOARD';
  } catch {
    status.textContent = 'Email: karthikeyan224488@gmail.com';
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
