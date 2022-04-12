

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.


function createList(items) {
  const listing = document.createElement('li');
  // const elementToAdd = listing.classList.add('item');
  // console.log(elementToAdd);
  const newArray = items.map((item) => listing.textContent=`${item}` )
  return newArray;
}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(createList(ingredients));




// const addedList = ingredients.map((item, i) =>
//   document.createAttribute('li').textContent = `${item[i]}`
// )
//   console.log(addedList);