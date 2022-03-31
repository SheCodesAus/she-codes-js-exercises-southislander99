function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    // console.log(number);
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function multiply(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
}

function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
}