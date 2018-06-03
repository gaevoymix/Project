var thumbs = document.querySelectorAll('.thumbnail');
var fullItem = document.querySelectorAll('.full-picture');

setItemView(getItem());
getPrice(getItem());

//Getting item's id
function getItem() {
    var params = window.location.hash;
    if (params.indexOf('id=') !== -1) {
        var id = params.substring(params.indexOf('id=') + 3);
        for (var i = 0; i < catalog.length; i++) {
            if (catalog[i].id === id) {
                return catalog[i];
            }
        }
    }
}

//Setting content
function setItemView(item) {
    if (item !== undefined) {
        for(var i = 0; i < thumbs.length; i += 1) {
            if (item.preview.length > i) {
                thumbs[i].setAttribute('src', 'img/thumbnail/' + item.preview[i]);
                fullItem[i].setAttribute('src', 'img/thumbnail/' + item.preview[i]);
            } else {
                thumbs[i].parentNode.removeChild(thumbs[i]);
            }
        }
        document.querySelector('.detailed-name').textContent = item.title;
        document.querySelector('.detailed-price').textContent = String.fromCharCode(163) + item.discountedPrice;
    }
}
//setting total cost to the shopping bag
function getPrice(item) {
    var addItem = document.getElementById('add-item-button');
    var bagCount = document.getElementById('bag-count');
    var bagTotals = document.getElementById('total-price');
    bagCount.value = 0;
    addItem.addEventListener('click', function () {
        bagCount.value++;
        bagCount.innerText ='(' + bagCount.value + ')';
        bagTotals.innerText = String.fromCharCode(163) + document.querySelector('.detailed-price').innerText.substring(1) * bagCount.value;
    })
}


//making images view
var imageIndex = 1;

showSlides(imageIndex);

function thumbSlide(n) {
    imageIndex = n;
    showSlides(imageIndex);
}

function showSlides(n) {
    if (n == undefined) {
        n = ++imageIndex;
    }

    if (n > imageIndex.length) {
        imageIndex = 1
    }

    if (n < 1) {
        imageIndex = fullItem.length
    }

    for (var i = 0; i < fullItem.length; i++) {

        fullItem[i].style.display = 'none';
        thumbs[i].classList.remove('active-thumbnail');

    }

    fullItem[imageIndex - 1].style.display = 'block';
    thumbs[imageIndex - 1].classList.add('active-thumbnail');
}


//selecting sizes
var sizeButtons = document.querySelectorAll('#size .btn-prop');

for (var i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].onclick = function () {
        var activeBtn = document.querySelector('#size .btn-prop.active-property');
        if(activeBtn) {
            activeBtn.classList.remove('active-property');
        }
        this.classList.add('active-property');
    };
}

//selecting colors
var colorButtons = document.querySelectorAll('#color .btn-prop')

for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].onclick = function () {
        var activeBtn = document.querySelector('#color .btn-prop.active-property');
        if(activeBtn) {
            activeBtn.classList.remove('active-property');
        }
        this.classList.add('active-property');
    };
}

