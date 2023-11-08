document.addEventListener('DOMContentLoaded', function () {
  // Obtén referencias a los elementos "menu-icon", "nav-links" y "mobile-menu-logo"
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const mobileMenuLogo = document.querySelectorAll('.mobile-menu-logo');

  // Agrega un controlador de eventos para hacer clic en "menu-icon"
  menuIcon.addEventListener('click', function () {
    // Verifica el estado actual de la propiedad "display" de "nav-links"
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
      // Si está oculto, cambia a "display: flex"
      navLinks.style.display = 'flex';
    } else {
      // Si ya está visible, ocúltalo nuevamente
      navLinks.style.display = 'none';
    }
  });

  // Agrega un controlador de eventos para hacer clic en "mobile-menu-logo"
  mobileMenuLogo.forEach(function (logo) {
    logo.addEventListener('click', function () {
      // Oculta "nav-links" al hacer clic en una imagen "mobile-menu-logo"
      navLinks.style.display = 'none';
    });
  });
});
