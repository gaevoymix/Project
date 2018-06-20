document.querySelector('.style-search-button').addEventListener('click', function () {
    var srchInput = document.querySelector('.style-search-input');
   srchInput.classList.toggle('style-search-input-active');
   document.querySelector('.style-search').classList.toggle('style-search-abs');
});