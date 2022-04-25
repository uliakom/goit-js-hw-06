
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputValue = document.querySelector('#controls input');
const boxContainer = document.getElementById('boxes');


const onBtnCreateClick = (event) => {
  for (let i = 0; i < inputValue.value; i += 1) {
    const divEl = document.createElement('div');
    boxContainer.append(divEl);
  }
  const divArrayEl = boxContainer.children;
  const divSize = 30;
  for (let i = 0; i < divArrayEl.length; i += 1) {
    divArrayEl[i].style.width = `${divSize + 10 * i}px`;
    divArrayEl[i].style.height = `${divSize + 10 * i}px`;
    divArrayEl[i].style.backgroundColor = getRandomHexColor();
    divArrayEl[i].style.marginTop = '15px';
  }
  inputValue.value = "";
};

btnCreate.addEventListener('click', onBtnCreateClick);

const destroyBoxes = () => {
  const addedBoxes = document.querySelectorAll('#boxes > div');
  for (const box of addedBoxes) {
    box.remove();
  }
  }

const onBtnDestroyClick = () => {
  destroyBoxes();
};

btnDestroy.addEventListener('click', onBtnDestroyClick);



