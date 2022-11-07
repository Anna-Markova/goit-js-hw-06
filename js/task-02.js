const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = ['Potatoes', 'Mushrooms',  'Garlic',  'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector(`#ingredients`);

  ingredients.map(ingredient => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("itemEl");
    return element;
  });

listEl.append(...itemEl);
