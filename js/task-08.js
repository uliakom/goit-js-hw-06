

const form = document.querySelector('.login-form');


const onFormSubmit = event => {
    event.preventDefault();

        const {
        elements: { email, password }
        } = event.currentTarget;
    
    
    if (email.value === '' || password.value === '') {
       return alert('Заповніть всі поля 🤚');
    }
    console.log(`email: ${email.value} , password:${password.value}`);
    event.currentTarget.reset();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
    console.log('formData name -', name);
    console.log('formData value -', value);
    })
}

form.addEventListener('submit', onFormSubmit);