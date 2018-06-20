totalCost();
//calculation total cost
function totalCost() {
    var quantity = document.querySelectorAll('.quantity-number');
    var addedItemPrice = document.querySelectorAll('.added-item-price');
    var bagTotals = document.getElementById('total-price');
    var bagCount = document.getElementById('bag-count');
    var totalPrice = document.querySelector('.total-price');
    var sum = 0;
    var totalQuantity = 0;
    var itemPrice = [];
    for (var i = 0; i < addedItemPrice.length; i++) {
        itemPrice.push(addedItemPrice[i].innerText * quantity[i].innerText);
        sum += addedItemPrice[i].innerText.substring(1) * quantity[i].innerText;
        totalQuantity += quantity[i].innerText * 1;
        bagCount.innerText = '(' + totalQuantity + ')';
        bagTotals.innerText = String.fromCharCode(163) + sum;
        totalPrice.innerText = String.fromCharCode(163) + sum;
    }
    return sum
}

//item managing
document.querySelector('.bag-items').addEventListener('click', bagItemManaging);
function bagItemManaging(e) {
    //delete item
    if(e.target.className === 'remove-item') {
        console.log('delete');
        e.target.previousSibling.previousSibling.childNodes[2].innerText = 0;
        totalCost();
        e.target.parentElement.parentElement.remove();
    }
    //change quantity increase
    if(e.target.parentElement.className === 'plus-btn') {
        e.target.parentElement.previousSibling.innerText++;
        totalCost();
    }
    // decrease
    if(e.target.parentElement.className === 'minus-btn') {
        if ( e.target.parentElement.nextSibling.innerText > 1) {
            e.target.parentElement.nextSibling.innerText--;
            totalCost();
        }
    }
}

function resetNumbers() {
    var bagTotals = document.getElementById('total-price');
    var bagCount = document.getElementById('bag-count');
    var totalPrice = document.querySelector('.total-price');
    totalPrice.innerText = String.fromCharCode(163) + 0;
    bagTotals.innerText = String.fromCharCode(163) + 0;
    bagCount.innerText = '(' + 0 + ')';
}

//clearing all items
document.getElementById('clear-items-button').addEventListener('click', function () {
    resetNumbers();
    document.querySelector('.bag-items').innerHTML = '<h2 class="empty-bag-heading">Your shopping bag is empty. Use Catalog to add new items</h2>';
});

//buying items
document.getElementById('buy-items-button').addEventListener('click', function () {
    resetNumbers();
    document.querySelector('.bag-items').innerHTML = '<h2 class="empty-bag-heading">Thank you for your purchase</h2>';
});