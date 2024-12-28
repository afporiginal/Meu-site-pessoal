// Seletores para tema e introdução
const themeToggleBtn = document.getElementById('theme-toggle'); // Botão para alternar entre temas
const body = document.body; // Corpo do site
const introSection = document.getElementById('intro'); // Seção de introdução
const cards = document.querySelectorAll('.card'); // Todas as cartas de habilidade
const linkCards = document.querySelectorAll('.link-card'); // Cartões de links (GitHub, Discord, Roblox)
const interestCards = document.querySelectorAll('.interest-card'); // Cartões de interesses

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
}

// Função para animação de introdução
function animateIntro() {
    if (introSection) {
        introSection.classList.add('fade-in'); // Adiciona a animação de fade-in
    }
}

// Função para aplicar efeito de hover nas cartas
function applyHoverEffect(card) {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
}

// Função para aplicar efeito de hover nas cartas de links
function applyLinkHoverEffect(linkCard) {
    linkCard.addEventListener('mouseover', () => {
        linkCard.style.transform = 'scale(1.05)';
        linkCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });

    linkCard.addEventListener('mouseout', () => {
        linkCard.style.transform = 'scale(1)';
        linkCard.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
}

// Função para aplicar efeito de hover nas cartas de interesses
function applyInterestHoverEffect(interestCard) {
    interestCard.addEventListener('mouseover', () => {
        interestCard.style.transform = 'scale(1.05)';
        interestCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });

    interestCard.addEventListener('mouseout', () => {
        interestCard.style.transform = 'scale(1)';
        interestCard.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
}

// Função para inicializar os efeitos de hover nas cartas
function initializeHoverEffects() {
    cards.forEach(card => applyHoverEffect(card));
    linkCards.forEach(linkCard => applyLinkHoverEffect(linkCard));
    interestCards.forEach(interestCard => applyInterestHoverEffect(interestCard));
}

// Função que ativa animações e efeitos após o carregamento da página
window.addEventListener('load', () => {
    animateIntro();
    initializeHoverEffects();
});

// Evento de clique no botão de alternância de tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
