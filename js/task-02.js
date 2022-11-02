const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsVeg  = document.querySelector("#ingredients");

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemVeg = document.createElement(`li`);
    itemVeg.textContent = ingredient;
    itemVeg.classList.add (`items`);
    return itemVeg;
  });
}
const elements = makeIngredients(ingredients);
ingredientsVeg.appendChild(...elements);
console.log(ingredientsVeg);