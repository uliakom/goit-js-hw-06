const allCategories = document.querySelectorAll('.item');
console.log("Number of categories:", allCategories.length);

const listCategory = document.querySelector('ul');

const firstCategory = listCategory.firstElementChild;
console.log(`Category: ${firstCategory.firstElementChild.textContent}`);
console.log(`Elements: ${firstCategory.lastElementChild.children.length}`);

const secondCategory = firstCategory.nextElementSibling;
console.log(`Category: ${secondCategory.firstElementChild.textContent}`);
console.log(`Elements: ${secondCategory.lastElementChild.children.length}`);

const thirdCategory = listCategory.lastElementChild;
console.log(`Category: ${firstCategory.firstElementChild.textContent}`);
console.log(`Elements: ${thirdCategory.lastElementChild.children.length}`);



