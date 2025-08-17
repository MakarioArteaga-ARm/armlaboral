document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');
  
  if (toggle && menu) {
    // Evento para abrir/cerrar el menú con el botón
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague al documento
      menu.classList.toggle('show');
    });
    
    // Evento para cerrar el menú si se hace click FUERA de él
    document.addEventListener('click', (e) => {
      // Si el menú está abierto y el click NO fue dentro del menú ni en el botón, ciérralo
      if (menu.classList.contains('show') && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
      }
    });

    // Evento para cerrar el menú con la tecla "Escape"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
  }

  // Desplazamiento suave para anclas (si las usas en el futuro)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const t = document.querySelector(id);
      if (t) { 
        e.preventDefault(); 
        t.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      }
    });
  });
});
