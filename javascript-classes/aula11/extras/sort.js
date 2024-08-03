// sort.js

// sort: Ordena os elementos de um array in-place e retorna o array ordenado. Por padrão, a ordenação é feita com base na ordem de caracteres Unicode.

const numeros = [10, 5, 100, 1, 25];

// Ordenar em ordem crescente
numeros.sort((a, b) => a - b);

console.log(numeros); // [1, 5, 10, 25, 100]
// O método sort ordenou os números de forma crescente utilizando a função de comparação fornecida.

const palavras = ['banana', 'maçã', 'pera', 'uva', 'ameixa'];

// Ordenar em ordem alfabética
palavras.sort();

console.log(palavras); // ['ameixa', 'banana', 'maçã', 'pera', 'uva']
// O método sort ordenou as palavras em ordem alfabética.