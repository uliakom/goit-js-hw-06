function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputContainer = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputValue = document.querySelector('#controls input');


const boxElements = [];


const createBoxes = (amount) => {
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.classList.add('boxes');
    width += 10;
    height += 10;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.marginTop = '15px';
    boxElements.push(divEl);
  }
};


inputValue.addEventListener('change', onInputClick);

function onInputClick (event) {
  const boxesToAdd = event.currentTarget.value;
  return createBoxes(boxesToAdd);
}


const onBtnCreateClick = () => {
  inputContainer.append(...boxElements);
};

btnCreate.addEventListener('click', onBtnCreateClick);

const destroyBoxes = () => {
  const addedBoxes = document.querySelectorAll('.boxes');
  for (const box of addedBoxes) {
    box.remove();
  }
  inputValue.value = '';
  }

const onBtnDestroyClick = () => {
  destroyBoxes();
};

btnDestroy.addEventListener('click', onBtnDestroyClick);






