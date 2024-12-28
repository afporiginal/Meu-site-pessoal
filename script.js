// Seletores para tema e introdução
const themeToggleBtn = document.getElementById('theme-toggle'); // Botão para alternar entre temas
const body = document.body; // Corpo do documento para alterar classes de tema
const introSection = document.getElementById('intro'); // Seção de introdução para animações

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // Troca o ícone do botão conforme o tema
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
}

// Função para animação de introdução
function animateIntro() {
    if (introSection) {
        introSection.classList.add('animated'); // Adiciona uma classe que ativa a animação
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

// Evento de clique no botão de alternância de tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Chamando a animação da seção de introdução após o carregamento
window.addEventListener('load', animateIntro);

// Aplica efeito de hover nas cartas, se existirem
document.querySelectorAll('.card').forEach(applyHoverEffect);
