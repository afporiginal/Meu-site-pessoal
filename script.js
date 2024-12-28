// Seletores para o botão de alternância de tema e o corpo do documento
const themeToggleBtn = document.getElementById('theme-toggle'); // Botão para alternar entre temas
const body = document.body; // Corpo do documento para alterar classes de tema

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

// Função para animar os cards de habilidades, ferramentas e interesses
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
    const sections = document.querySelectorAll('.skills, .tools, .favorites');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Configuração para animação das seções ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skills, .tools, .favorites').forEach(section => {
        section.classList.add('initial-fade');
    });
});

// Função para alternar o estilo da página dependendo do tamanho da tela (Responsividade)
const updateResponsiveStyles = () => {
    const width = window.innerWidth;

    if (width < 768) {
        // Modifica o layout para telas pequenas
        document.querySelectorAll('.skills .cards, .tools .tools-cards, .favorites .favorites-cards').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        });
    } else {
        // Reverte as modificações de layout
        document.querySelectorAll('.skills .cards, .tools .tools-cards, .favorites .favorites-cards').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        });
    }
};

window.addEventListener('resize', updateResponsiveStyles);
updateResponsiveStyles();

// Efeito de fade-in ao carregar as seções
const fadeInUpAnimation = document.styleSheets[0].insertRule(`
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`, 0);

// Aplicando a animação fadeInUp nas seções
const applySectionAnimations = () => {
    document.querySelectorAll('.skills, .tools, .favorites').forEach(section => {
        section.classList.add('fadeInUp');
    });
};

window.addEventListener('scroll', applySectionAnimations);

// Lógica para o botão de alternância de tema
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Função para adicionar animações de fade nas seções
const fadeInSections = () => {
    const sections = document.querySelectorAll('.skills, .tools, .favorites');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('fadeInUp');
        }
    });
};

// Evento de scroll para a animação das seções
window.addEventListener('scroll', fadeInSections);

// Configuração de início para animação
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skills, .tools, .favorites').forEach(section => {
        section.classList.add('fadeIn');
    });
});
