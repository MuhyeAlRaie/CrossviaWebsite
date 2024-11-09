// Initialize AOS (Animate on Scroll)
AOS.init();

// Handle mobile sidebar toggle
const sidebar = document.querySelector('.sidebar');
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
