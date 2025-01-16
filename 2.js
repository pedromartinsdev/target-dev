/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

const numero = 21;

let fibonacciAnt = 0;
let fibonacciAtual = 1;
let encontrado = false;

if (numero === 0 || numero === 1) {
    encontrado = true;
} else {
    while (fibonacciAtual <= numero) {
        if (fibonacciAtual === numero) {
            encontrado = true;
            break;
        }
        let proximo = fibonacciAnt + fibonacciAtual;
        fibonacciAnt = fibonacciAtual;
        fibonacciAtual = proximo;
    }
}

if (encontrado) {
    console.log("O número " + numero + " pertence à sequência de Fibonacci.");
} else {
    console.log("O número " + numero + " NÃO pertence à sequência de Fibonacci.");
}
