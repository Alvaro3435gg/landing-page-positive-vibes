document.addEventListener('DOMContentLoaded', function () {
  // Obtén referencias a los elementos "menu-icon", "nav-links" y "mobile-menu-logo"
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const mobileMenuLogo = document.querySelectorAll('.mobile-menu-logo');

    menuIcon.addEventListener('click', function () {

    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  });

  mobileMenuLogo.forEach(function (logo) {
    logo.addEventListener('click', function () {
            navLinks.style.display = 'none';
    });
  });
});
