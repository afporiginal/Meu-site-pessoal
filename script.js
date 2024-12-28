// Seletores para o botão de alternância de tema e o corpo do documento
const themeToggleBtn = document.getElementById('theme-toggle'); // Botão para alternar entre temas
const body = document.body; // Corpo do documento para alterar classes de tema
const introSection = document.getElementById('intro'); // Seção de introdução para animações

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // Troca o ícone do botão conforme o tema
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
}

// Evento de clique no botão de alternância de tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Função de animação para carregar o conteúdo da página
window.addEventListener('load', () => {
    const introContent = document.querySelector('.intro .content');
    
    // Adiciona a animação de fadeIn quando a página carrega
    introContent.classList.add('fadeIn');
});

// Função para animar os cards de hobbies, preferências e ferramentas
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.25)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});

// Função para adicionar efeitos de hover nas seções
const sectionHeaders = document.querySelectorAll('h2');

sectionHeaders.forEach(header => {
    header.addEventListener('mouseenter', () => {
        header.style.color = '#e50914'; // Cor de destaque
    });

    header.addEventListener('mouseleave', () => {
        header.style.color = '#fff'; // Cor original
    });
});

// Detalhes de animação ao rolar a página
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.about, .skills, .interests');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Função para alternar o estilo da página dependendo do tamanho da tela (Responsividade)
const updateResponsiveStyles = () => {
    const width = window.innerWidth;

    if (width < 768) {
        // Modifica o layout para telas pequenas
        document.querySelectorAll('.about .content, .skills .content, .interests .content').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        });
    } else {
        // Reverte as modificações de layout
        document.querySelectorAll('.about .content, .skills .content, .interests .content').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        });
    }
};

window.addEventListener('resize', updateResponsiveStyles);
updateResponsiveStyles();

// Efeito de fade-in ao carregar as seções
const fadeInSections = () => {
    const sections = document.querySelectorAll('.about, .skills, .interests');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('fadeInUp');
        }
    });
};

window.addEventListener('scroll', fadeInSections);

// Função de animação na introdução
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about, .skills, .interests').forEach(section => {
        section.classList.add('fadeIn');
    });
});

// Lógica de animação para cada card de interesse
const animateCard = (card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
};

document.querySelectorAll('.interest-card').forEach(animateCard);

// Função para abrir links do GitHub e Discord (Com ícones)
const openGitHub = () => {
    window.open("https://github.com/afporiginal", "_blank");
};

const openDiscord = () => {
    window.open("https://discord.gg/Jz2qrC2mwY", "_blank");
};

document.getElementById('github-btn').addEventListener('click', openGitHub);
document.getElementById('discord-btn').addEventListener('click', openDiscord);
