// Seletores para alternância de tema e animações
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const introSection = document.getElementById('intro');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

// Função para alternar entre temas claro e escuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
}

// Função de animação de introdução
function animateIntro() {
    if (introSection) {
        introSection.querySelector('.content').classList.add('fadeIn');
    }
}

// Animar os cards ao passar o mouse
function animateCard(card) {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
}

// Aplicar animação nos cards
animateCard(card1);
animateCard(card2);
animateCard(card3);
animateCard(card4);

// Evento para alternar o tema
themeToggleBtn.addEventListener('click', toggleTheme);

// Chama a animação da introdução ao carregar a página
window.addEventListener('load', animateIntro);
