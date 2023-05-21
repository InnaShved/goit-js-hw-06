// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newDivBtn = document.querySelector('button[data-create]');
const deleteDivsBtn = document.querySelector('button[data-destroy]');
const amountInput = document.querySelector('input[type="number"]');
const field = document.querySelector('#boxes');



newDivBtn.addEventListener('click', handleNewDivBtnBtn)
  
  function handleNewDivBtnBtn (){
  let amount = Number(amountInput.value);
  if (!amount || amount <= 0) {
    alert('Enter number');
    return;
  }
  createBoxes(amount);
  amountInput.value = '';
};

function createBoxes(amount) {
  
  const boxes = [];
  let size = 30;
  
  for (let i = 0; i < amount; i += 1) {
    boxes[i] = document.createElement("div");
    boxes[i].style.width = `${size}px`;
    boxes[i].style.height = `${size}px`;
    boxes[i].style.backgroundColor = getRandomHexColor();
    boxes[i].style.margin = '5px';
    boxes[i].classList.add('item');
    size += 10;
  }
  field.append(...boxes);
};

 


function destroyBoxes() {
    const boxes = document.querySelectorAll('.item');
    boxes.forEach(box=>box.remove());
};

deleteDivsBtn.addEventListener('click', destroyBoxes);