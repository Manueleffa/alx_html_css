// mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu-items");
  const toggleButton = document.querySelector(".mobile-menu-toggle");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

// navbar on scroll
window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0){
        navbar.classList.add('navbar-scroll')
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})

