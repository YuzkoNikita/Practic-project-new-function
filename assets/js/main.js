/* Show menu start */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    });
};
/* Show menu end */
/* Remove menu mobile start */
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show_menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));
/* Remove menu mobile end */

const swiperHome = new Swiper('.home_swiper', {
    speed: 1200,
    effect: 'fade',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
      }
    },
  });  
/* Gsap animation start */
gsap.from('.home_panel-1', {y: -1000, duration: 2});
gsap.from('.home_panel-2', {y: 1000, duration: 2});
gsap.from('.home_image', {x: 1000, duration: 2});
gsap.from('.home_titles', {y: 100, opacity: 0, delay: 2});
gsap.from('.home_title', {y: 100, opacity: 0, delay: 2.1});
/* Gsap animation end */

/* Add blur start */
const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
};

window.addEventListener('click', blurHeader);
/* Add blur end */
