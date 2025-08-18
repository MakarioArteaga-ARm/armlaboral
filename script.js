document.addEventListener('DOMContentLoaded', () => {
  // --- Lógica del Menú Móvil (ya existente) ---
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-menu ul');
  
  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('show') && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
      }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
  }

  // --- NUEVO: Lógica para Animación de Scroll ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
      }
    });
  }, {
    threshold: 0.1 // El elemento se activa cuando el 10% es visible
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
