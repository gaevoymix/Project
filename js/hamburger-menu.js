document.getElementById('hamburger').addEventListener('click', function () {
    var nav = document.querySelector('.header-bottom');
    var header = document.querySelector('.header');
    nav.classList.toggle('active');
    document.getElementById('hamburger').classList.toggle('hamburger-crossing');
   header.classList.toggle('extend-header');
});