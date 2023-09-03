// DECLARANDO FUNÇÕES  
function exibirTexto(texto) {
    if(typeof texto === "string") {
        console.log(texto);
    } else {
        console.error(new Error(`Dados não esperado: ${typeof texto}`));
    }
}

function soma(x, y) {
    return x + y;
}
console.log(soma(2, 5)); 
exibirTexto("Carro");