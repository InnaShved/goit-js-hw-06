const value = document.querySelector('#value');
const IncreaseValueBtn = document.querySelector('[data-action="increment"]');
const DecreaseValueBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0; 

function onIncreaseValueBtnClick() {
    counterValue += 1;
    value.textContent = counterValue;
};

function onDecreaseValueBtnClick() {
    counterValue -= 1;
    value.textContent = counterValue;
};

IncreaseValueBtn.addEventListener('click', onIncreaseValueBtnClick);
DecreaseValueBtn.addEventListener('click', onDecreaseValueBtnClick);