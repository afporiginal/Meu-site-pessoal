document.addEventListener('DOMContentLoaded', () => {
    // Animações ou interatividade podem ser adicionadas aqui
    // Exemplo: adicionar um efeito suave ao rolar a página
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    });
});
