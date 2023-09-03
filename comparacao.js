// == -> (comparacao implícita)
const numero = 5;
const texto = "5";

console.log(numero == texto)
console.log(numero === texto)

// == compara apenas o valor do dado
// === compara o valor do dado e o tipo também

// comparação explícita

console.log(numero === Number(texto))