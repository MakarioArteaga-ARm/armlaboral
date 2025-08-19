document.addEventListener('DOMContentLoaded', () => {
  
  // --- Lógica para el efecto de scroll en el encabezado ---
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Lógica para el menú móvil (hamburguesa) ---
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  const menuLinks = mainMenu.querySelectorAll('a');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      mainMenu.classList.toggle('is-open');
      
      // Cambiar ícono y aria-label
      if (mainMenu.classList.contains('is-open')) {
        menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        menuToggle.setAttribute('aria-label', 'Cerrar menú');
      } else {
        menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        menuToggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
    
    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainMenu.classList.contains('is-open')) {
                mainMenu.classList.remove('is-open');
                menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });
  }

  // --- Lógica para las animaciones al hacer scroll ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Cuando el elemento es visible en la pantalla
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Dejar de observar el elemento una vez que la animación se ha disparado
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

});
