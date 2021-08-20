// ram button event handler
const firstRamButton = document.getElementById('first-ram');

const secondRamButton = document.getElementById('second-ram');

const extraMemoryCost = document.getElementById('extra-memory-cost');


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
}

const newTotal = document.getElementById('footer-total')


























function total(item, amount) {
    const memoryCost = document.getElementById(item + '-cost');
    memoryCost.innerText = amount;
    costing()
}


// ----------
function costing() {

    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryCostText.innerText);

    const storageCostText = document.getElementById('storage-cost');
    const storageCost = parseInt(storageCostText.innerText);
    const deliveryCostText = document.getElementById('delivery-cost')
    const deliveryCost = parseInt(deliveryCostText.innerText);
    const total = document.getElementById('total-cost');
    total.innerText = memoryCost + storageCost + deliveryCost + 1299;


    const total2 = document.getElementById('grand-total');
    total2.innerText = memoryCost + storageCost + deliveryCost + 1299;





    return total;
}


// memory cost
document.getElementById('16gb-input').addEventListener('click', function () {
    total('memory', '180')
})
document.getElementById('8bg-input').addEventListener('click', function () {
    total('memory', '0')

})

// storageCost 
document.getElementById('256ssd-input').addEventListener('click', function () {
    total('storage', '0')
})
document.getElementById('512ssd-input').addEventListener('click', function () {
    total('storage', '100')

})
document.getElementById('1tbSSD-input').addEventListener('click', function () {
    total('storage', '180')
})

// delivery cost 
document.getElementById('free-delivery').addEventListener('click', function () {
    total('delivery', '0')
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    total('delivery', '20')
})
