// ram button event handler
const firstRamButton = document.getElementById('first-ram');

const secondRamButton = document.getElementById('second-ram');

const extraMemoryCost = document.getElementById('extra-memory-cost');

const footerTotal = document.getElementById('footer-total');


//price relate
const best = document.getElementById('best');
const totalCost = document.getElementById('total-cost');

firstRamButton.addEventListener('click', function () {
    extraMemoryCost.innerText = 0;
    best.innerText = 1299;
    grandTotal()
})

secondRamButton.addEventListener('click', function () {
    extraMemoryCost.innerText = 180;
    best.innerText = 1299;
    grandTotal()
})




// storage Part------------
// -----------------

const firstStorageButton = document.getElementById('frist-storage');

const secondStorageButton = document.getElementById('second-storage');

const thirdStorageButton = document.getElementById('third-storage');

const extraStorageCost = document.getElementById('extra-storage-cost');

firstStorageButton.addEventListener('click', function () {
    extraStorageCost.innerText = 0;
    best.innerText = 1299;
    grandTotal()
})

secondStorageButton.addEventListener('click', function () {
    extraStorageCost.innerText = 100;
    best.innerText = 1299;
    grandTotal()

})

thirdStorageButton.addEventListener('click', function () {
    extraStorageCost.innerText = 180;
    best.innerText = 1299;
    grandTotal()

})

// delivery cost part-------------
//--------------------------

const deliveryChargeFree = document.getElementById('delivery-charge-free');

const deliveryCharge = document.getElementById('delivery-charge');

const delivery = document.getElementById('delivery')

deliveryChargeFree.addEventListener('click', function () {
    delivery.innerText = 0;
    best.innerText = 1299;
    grandTotal()
});

deliveryCharge.addEventListener('click', function () {
    delivery.innerText = 20;
    best.innerText = 1299;
    grandTotal()
});

function grandTotal() {
    const ramPrice = Number(extraMemoryCost.innerText);
    const macPrice = Number(best.innerText);
    const StoragePrice = Number(extraStorageCost.innerText);
    const deliveryTotal = Number(delivery.innerText);
    const total = (ramPrice + macPrice + StoragePrice + deliveryTotal);
    totalCost.innerText = total;
    footerTotal.innerText = total;

}

// discount part 
var count = 0;
document.getElementById('discount-code').addEventListener('click', function () {

    const promorFiled = document.getElementById('use-promo');


    if (promorFiled.value == 'stevekaku') {
        const footerTotalAmount = parseFloat(footerTotal.innerText)
        const discount = footerTotalAmount * 0.2
        footerTotal.innerText = footerTotalAmount - discount
        promorFiled.value = ''

    }


    else {
        alert("You can only use the promo code once!!");
        footerTotal.innerText = footerTotalAmount;
    }

})












