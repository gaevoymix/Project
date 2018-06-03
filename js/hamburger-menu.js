var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('.header-bottom');
var header = document.querySelector('.header');

hamburger.addEventListener('click', function () {
   nav.classList.toggle('active');
   hamburger.classList.toggle('hamburger-crossing');
   header.classList.toggle('extend-header');
});