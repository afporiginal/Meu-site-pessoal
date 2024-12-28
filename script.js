document.addEventListener('DOMContentLoaded', () => {
    // Animações para seções aparecerem quando estiverem visíveis
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
