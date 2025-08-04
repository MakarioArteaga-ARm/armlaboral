// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- MANEJO DEL MENÚ DE NAVEGACIÓN ---
    // Selecciona los elementos relevantes del menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Alterna la visibilidad del menú y el estado del botón
        function toggleMenu() {
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('active');
        }

        // Cierra el menú y resetea el botón
        function closeMenu() {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        }

        // Abre/cierra el menú al hacer clic en el ícono
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Cierra el menú si se hace clic fuera de él
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Cierra el menú cuando se hace clic en un enlace de navegación
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- ANIMACIÓN DEL TEXTO EN LA SECCIÓN HERO AL CARGAR O HACER SCROLL ---
    const heroText = document.querySelector('.animated-hero-text');
    
    // Configuración para el observador
    const heroObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    // Callback que se ejecuta cuando el elemento es observado
    const heroObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento está en la vista, activa la animación
                entry.target.classList.add('is-visible');
                // Deja de observar para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    };

    // Crea y empieza a observar el elemento heroText
    const heroObserver = new IntersectionObserver(heroObserverCallback, heroObserverOptions);
    if (heroText) {
        heroObserver.observe(heroText);
    }
    
    // --- ANIMACIONES GENERALES DE SCROLL PARA SECCIONES CON LA CLASE 'fade-in' ---
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    const fadeInOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    fadeInElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    // --- EFECTO DE SCROLL DEL HEADER ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(14, 77, 146, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #0E4D92 0%, #1a5ba8 100%)';
                header.style.backdropFilter = 'none';
            }
        });
    }

    console.log('ARmLaboral website scripts loaded successfully! 🚀');
});
