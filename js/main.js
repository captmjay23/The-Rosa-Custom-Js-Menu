// Menu Toggler
const menuToggler = document.querySelector('#menu-toggler');
const icon = document.querySelector('#icon');
const navList = document.querySelector('.nav-list');
menuToggler.addEventListener('click', () => {
  if(icon.classList.contains('fa-bars')){
    // icon
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    // NavList
    navList.classList.add('show');
    navList.classList.remove('hide')
  } else {
    // Icon
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    // Navlist
    navList.classList.remove('show');
    navList.classList.add('hide')
  }
})