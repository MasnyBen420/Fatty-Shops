function classToggle() {
    const navs = document.querySelectorAll('.navbarLinks')
    
    navs.forEach(nav => nav.classList.toggle('navbarShow'));
  }
  
  document.querySelector('.navbarToggle')
    .addEventListener('click', classToggle);