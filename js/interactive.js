function interactiveNumber(inputId, UpOrDown) {

    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    let inputFieldInt = parseInt(inputFieldString);
    if (UpOrDown) {
        inputFieldInt++;
    } else {
        inputFieldInt--;
        if (inputFieldInt == -1) return 0;
    }
    inputField.value = inputFieldInt;
    return inputFieldInt;
}

function showingTotalPrice() {
    let subprice = 0;
    const prices = document.getElementsByClassName('prices');
    for (price of prices) {
        subprice += parseInt(price.innerText);
    }
    // return subprice;
    let tex = parseFloat((subprice * .1).toFixed(2));
    // return tex;
    let totalPrice = subprice + tex;
    document.getElementById('sub-price').innerText = subprice;
    document.getElementById('tex-price').innerText = tex;
    document.getElementById('total-price').innerText = totalPrice;


}

function interactivePrice(inputId, price) {
    document.getElementById(inputId).innerText = price;
}

function domEventListener(inputId, inputField, price, priceShow, UpOrDown) {
    document.getElementById(inputId).addEventListener('click', function () {
        let howMany = interactiveNumber(inputField, UpOrDown);
        interactivePrice(priceShow, howMany * price);
        showingTotalPrice();

    })
}
domEventListener('phone-btn-plus', 'phone-input-field', 1219, 'phone-price', true);
domEventListener('phone-btn-minus', 'phone-input-field', 1219, 'phone-price', false);
domEventListener('case-btn-plus', 'case-input-field', 59, 'case-price', true);
domEventListener('case-btn-minus', 'case-input-field', 59, 'case-price', false);

// document.getElementById('case-btn-plus').addEventListener('click', function () {
//     let howMany = interactiveNumber('case-input-field', true);
//     interactivePrice('case-price', howMany * 59);

// })
