// forEach.js

// forEach: Executa uma função fornecida uma vez para cada elemento do array, mas não retorna um novo array.

const arr = ['banana', 'maçã', 'pera', 'uva', 'ameixa'];

arr.forEach((element, index) => {
  console.log(`Elemento ${index + 1}: ${element}`);
  // A sintaxe de toda função agregadora resume-se em "para cada elemento desse array execute:"
  // Nesse caso, imprimirá uma mensagem que é "Elemento" seguido do índice desse elemento dentro da lista, seguido do elemento.
});

// forEach é uma das poucas funções agregadoras que não retorna um novo array, é importante estar atento a isso.

// Porém, é possível utilizá-la para construir um array "do zero":
let novoArray = [];

arr.forEach((element) => {
  novoArray.push(element.toUpperCase());
  // Nesse caso, a execução do forEach preenche (ou popula) o array "novoArray" através do método push,
  // para CADA elemento que existe no array de referência "arr" e transforma cada um desses elementos (que são strings)
  // em caixa alta antes de adicioná-los à nova lista.
});

console.log(novoArray); // ["BANANA", "MAÇÃ", "PERA", "UVA", "AMEIXA"]