const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.getElementById('year');
const revealItems = document.querySelectorAll('.reveal');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const showSubmitMessage = (formId, message) => {
  const form = document.getElementById(formId);
  if (!form) return;

  const statusEl = form.querySelector('.form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (statusEl) statusEl.textContent = message;
    form.reset();
  });
};

showSubmitMessage('newsletterForm', 'Thanks for subscribing! Insights will land in your inbox soon.');
showSubmitMessage('contactForm', 'Thanks for reaching out! I will get back to you shortly.');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));
