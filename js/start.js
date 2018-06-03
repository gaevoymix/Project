var srchBtn = document.querySelector('.style-search-button');
var srchInput = document.querySelector('.style-search-input');

srchBtn.addEventListener('click', function () {
   srchInput.classList.toggle('style-search-input-active');
   document.querySelector('.style-search').classList.toggle('style-search-abs');
});