// Funcionalidad para cambio de tema (Modo Claro / Oscuro)
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = '☀️ Modo Claro';
  } else {
    themeToggleButton.textContent = '🌙 Modo Oscuro';
  }
});