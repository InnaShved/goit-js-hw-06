// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputField = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

const handleInputChange = () => {
    inputField.value != '' ? userName.textContent = inputField.value : userName.textContent = 'Anonymous';
}

inputField.addEventListener('input', handleInputChange);
