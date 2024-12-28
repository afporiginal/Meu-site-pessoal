// Variáveis para o tema e animação de transição
const themeToggleBtn = document.getElementById('theme-toggle'); // Botão para alternar entre modos
const body = document.body; // Corpo do documento para alterar as classes de tema
const introSection = document.getElementById('intro'); // Seção de introdução para animações de entrada

// Função para alternar entre o modo claro e escuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    // Troca o ícone do botão conforme o tema
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '🌞'; // Sol, para indicar que é o modo claro
    } else {
        themeToggleBtn.textContent = '🌙'; // Lua, para indicar que é o modo escuro
    }
}

// Função para animação de introdução
function animateIntro() {
    introSection.classList.add('animated'); // Adiciona uma classe que ativa animação de fade-in
}

// Adicionando evento de clique no botão de tema
themeToggleBtn.addEventListener('click', toggleTheme);

// Chamando a animação da seção de introdução após o carregamento
window.addEventListener('load', animateIntro);

// Função para aplicar animação a outros elementos
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

// Aplica efeito de hover nas cartas
document.querySelectorAll('.card').forEach(applyHoverEffect);
