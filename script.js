document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-menu ul');
  
  if (toggle && menu) {
    // Evento para abrir/cerrar el menú con el botón
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague al documento
      menu.classList.toggle('show');
      toggle.classList.toggle('open'); // Agrega esta línea para alternar la clase 'open'
    });
    
    // Evento para cerrar el menú si se hace click FUERA de él
    document.addEventListener('click', (e) => {
      // Si el menú está abierto y el click NO fue dentro del menú ni en el botón, ciérralo
      if (menu.classList.contains('show') && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
        toggle.classList.remove('open'); // Agrega esta línea para quitar la clase 'open'
      }
    });

    // Evento para cerrar el menú con la tecla "Escape"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('show')) {
            menu.classList.remove('show');
            toggle.classList.remove('open'); // Agrega esta línea para quitar la clase 'open'
        }
    });
  }

 
