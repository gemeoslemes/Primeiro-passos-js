// Arrow functions

// const soma = (number1, number2) => {number1 * number2}

const sum = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return "Apenas números entre 0-9";
    } else {
        return num1 + num2;
    }
}

// console.log(sum(2, 10))