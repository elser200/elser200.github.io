// Crear un nuevo archivo scroll-animations.js
document.addEventListener('DOMContentLoaded', () => {
  // Animación para elementos con la clase fade-in-section
  const fadeSections = document.querySelectorAll('.fade-in-section');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeSections.forEach(section => {
    fadeObserver.observe(section);
  });

  // Header que se reduce al hacer scroll
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Animación escalonada para las habilidades
  const skills = document.querySelectorAll('.skill-item');
  
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.5
  });

  skills.forEach(skill => skillsObserver.observe(skill));
});

