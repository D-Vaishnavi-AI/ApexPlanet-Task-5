
// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form submit handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks, ${name}! We'll get back to you soon.`);
  form.reset();
});
