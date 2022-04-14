

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = items =>
  items.map(item => {
    const ingrediantElement = document.createElement('li');
    ingrediantElement.textContent = item;
    ingrediantElement.classList.add('item');
    return ingrediantElement;
  }
  );

const ingrediantsToAdd = createList(ingredients);
const listOfIngredients = document.getElementById('ingredients');
listOfIngredients.append(...ingrediantsToAdd);





