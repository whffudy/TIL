let number = document.getElementById('number');

const plus = () => {
    number.innerText = parseInt(number.innerText) + 1;
};

const minus = () => {
    number.innerText = parseInt(number.innerText) - 1;
};

document.getElementById('plusButton').onclick = plus;
document.getElementById('minusButton').onclick = minus;