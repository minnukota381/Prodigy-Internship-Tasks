window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let logo = document.querySelector('.navbar-brand img');
  
    if (window.scrollY > 50) {
      navbar.classList.add('scroll-color');
      navLinks.forEach(link => link.style.color = '#fff');
      logo.src = 'logo1.svg';
    } else {
      navbar.classList.remove('scroll-color');
      navLinks.forEach(link => link.style.color = '#333');
      logo.src = 'logo2.svg';
    }
  });
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  