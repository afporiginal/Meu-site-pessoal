// Seletores
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const introSection = document.getElementById('intro');

// Alternar entre temas
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Animação de fade-in
window.addEventListener('load', () => {
    if (introSection) {
        introSection.classList.add('fade-in');
    }
});
