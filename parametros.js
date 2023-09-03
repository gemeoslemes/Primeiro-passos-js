// PARAMETROS DAS FUNÇÕES

// function soma(...arrays) {
//     if(arrays === 0) {
//         return 0;
//     }
//     let total =  0;
//        for(let i = 0; i < arrays.length; i++) {
//            const arraysAtual = arrays[i];
           
//            if(Array.isArray(arraysAtual)) {
//             for(let x = 0; x < arraysAtual.length; x++) {
//                 total += arraysAtual[x];
//             } 
//            } else {
//                 return NaN;
//             }
//             return total;
//        } 
// }

// const numeros = [1, 5, 6, 9]

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
} 

console.log(multiplicacao(soma(4, 8), soma(7,5)))
