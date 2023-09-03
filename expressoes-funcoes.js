// A principal diferença de uma declaração de função e uma expressão de função é o  "HOSTING"
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar());

function apresentar() {
    return "olá";
}

// console.log(soma(1, 1))

const soma = function(num1, num2){return num1 + num2}