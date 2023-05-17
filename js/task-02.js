const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createItem(item) {
  const newEL = document.createElement("li");
  newEL.textContent = item;
  newEL.classList.add('item');
  return newEL;
};

const ingredientsListItems = ingredients.map(createItem);
const ingredientsList = document.querySelector('#ingredients');


ingredientsList.append(...ingredientsListItems);
