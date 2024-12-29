// script.js

// Adicionar animação ao rolar para seções
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Exemplo de animação ao passar o mouse em projetos
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});
