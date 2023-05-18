// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const symboldInputField = document.querySelector('#validation-input');

const validator = symboldInputField.getAttribute('data-length');
console.log(validator);

const handleInputBlur = () => {
    symboldInputField.value.length = validator ? symboldInputField.setAttribute('class', 'valid') : symboldInputField.setAttribute('class', 'invalid');
    

};
symboldInputField.addEventListener('blur', handleInputBlur);