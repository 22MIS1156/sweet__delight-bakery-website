const shopNameElement = document.getElementById('shop-name');

const shopName = 'Sweet Delights';
const typingSpeed = 50;

let i = 0;

function typeShopName() {
    if (i < shopName.length) {
        shopNameElement.innerHTML += shopName[i];
        i++;
        setTimeout(typeShopName, typingSpeed);
    }
}

typeShopName();