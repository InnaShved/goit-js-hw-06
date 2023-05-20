// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeEditor = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Solution 1
// function handleFontSizeChange() {
//     text.style.fontSize = `${fontSizeEditor.value}px`;
// };


// Solution 2
function handleFontSizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeEditor.addEventListener('input', handleFontSizeChange);
