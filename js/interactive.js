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
function interactivePrice(inputId, price) {
    document.getElementById(inputId).innerText = price;
}

function domEventListener(inputId, inputField, price, priceShow, UpOrDown) {
    document.getElementById(inputId).addEventListener('click', function () {
        let howMany = interactiveNumber(inputField, UpOrDown);
        interactivePrice(priceShow, howMany * price);

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
