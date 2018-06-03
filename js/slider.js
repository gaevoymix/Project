var slideIndex = 1;
var t;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

showSlides(slideIndex);



function plusSlides(n) {

    slideIndex = slideIndex + n;
    clearTimeout(t);
    showSlides(slideIndex);
}


function dotSlides(n) {
    slideIndex = n;
    clearTimeout(t);
    showSlides(slideIndex);
}

function showSlides(n) {
    if (n == undefined) {
        n = ++slideIndex;
    }

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }



    for (var i = 0; i < slides.length; i++) {

        slides[i].style.display = 'none';
        dots[i].classList.remove('active');

    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    t = setTimeout(showSlides, 10000);

}

