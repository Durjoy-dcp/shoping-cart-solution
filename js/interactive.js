function interactiveNumber(inputId, UpOrDown) {

    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    let inputFieldInt = parseInt(inputFieldString);
    if (UpOrDown) {
        inputFieldInt++;
    } else {
        inputFieldInt--;
        if (inputFieldInt == -1) return;
    }
    inputField.value = inputFieldInt;
}
document.getElementById('case-btn-plus').addEventListener('click', function () {
    interactiveNumber('case-input-field', true);

})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    interactiveNumber('case-input-field', false);

})