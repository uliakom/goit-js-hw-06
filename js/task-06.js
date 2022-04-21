

// {/* <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// /> */}

const inputText = document.querySelector('#validation-input');

const onInputChange = (event) => {
    inputText.textContent = event.currentTarget.value;
};

const onInputCheck = (event) => {
    if (event.currentTarget.value.length === Number (inputText.dataset.length)) {
        inputText.classList.add('valid');
    }
    else {
        inputText.classList.add('invalid');
        console.log(inputText.dataset.length);
        console.log(event.currentTarget.value.length);
    }
};

inputText.addEventListener('input', onInputChange);
inputText.addEventListener ('blur', onInputCheck);
