// Desplazamiento suave al hacer clic en el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Resaltar la tarjeta seleccionada al hacer clic
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    projectCards.forEach(c => c.style.borderColor = 'var(--border-color)');
    card.style.borderColor = 'var(--accent-color)';
  });
});