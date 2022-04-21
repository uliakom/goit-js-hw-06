

// {/* <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div> */}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const button = document.querySelector('.change-color');
const colorNumber = document.querySelector('.color');

const makeBodyColor = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorNumber.textContent = color;
};
button.addEventListener('click', makeBodyColor);