document.addEventListener("DOMContentLoaded", function() {
    // Desplazamiento suave
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Manejo del menú de navegación móvil
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Cambio de transparencia en la barra de navegación al desplazarse
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }
    }

    // Ejecutar la función al cargar la página
    handleScroll();

    // Ejecutar la función cada vez que se hace scroll
    window.addEventListener('scroll', handleScroll);
});
