const value = document.querySelector('#value');
const IncreaseValueBtn = document.querySelector('[data-action="increment"]');
const DecreaseValueBtn = document.querySelector('[data-action="decrement"]');

function onIncreaseValueBtnClick() {
    let CurrentValue = Number(value.textContent);
    CurrentValue += 1;
    value.textContent = CurrentValue;
};

function onDecreaseValueBtnClick() {
    let CurrentValue = Number(value.textContent);
    CurrentValue -= 1;
    value.textContent = CurrentValue;
};

IncreaseValueBtn.addEventListener('click', onIncreaseValueBtnClick);
DecreaseValueBtn.addEventListener('click', onDecreaseValueBtnClick);