
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChange = event => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value);
};
    
inputEl.addEventListener('input', onInputChange);