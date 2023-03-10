const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
   if (header.classList.contains('open')) {
      body.classList.remove('noscroll');
      header.classList.remove('open');
      fadeElems.forEach((elm) => {
         elm.classList.remove('fade-in');
         elm.classList.add('fade-out');
      });
   } else {
      body.classList.add('noscroll');
      header.classList.add('open');
      fadeElems.forEach((elm) => {
         elm.classList.add('fade-in');
         elm.classList.remove('fade-out');
      });
   }
});
