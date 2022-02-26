const navbarCont = document.querySelector('.navbar__flexContainer--flex');
const burger = document.querySelector('.navbar__burger');
const navbar = document.querySelector('.navbar')
const navlogo = document.querySelector('.navbar__logo')
const contentlogo = document.querySelector('.banner__logoContainer')
const navlinks = Array.from(document.querySelectorAll('.navbar__navlink'))

burger.addEventListener('click', function(){
  navbarCont.classList.toggle('transX');
  navbar.classList.add('navbar--sticky');
});

window.addEventListener('scroll', function() {
  console.log('scroller')
  navbar.classList.toggle('navbar--sticky',window.scrollY > 50);
  navlogo.classList.toggle('opa100', window.scrollY > 50);
});


navbarCont.addEventListener('click', disappear)

function disappear() {
  navbarCont.classList.toggle('transX');
}



// onscroll change logo to name in iphone 5 mode as well