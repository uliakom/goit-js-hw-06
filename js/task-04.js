const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};


document.querySelector('button[data-action="increment"]').addEventListener('click', function () {
    counterValue.increment();
    document.querySelector('#value').textContent = counterValue.value;
});

document.querySelector('button[data-action="decrement"]').addEventListener('click', function () {
    counterValue.decrement();
    document.querySelector('#value').textContent = counterValue.value;
});

