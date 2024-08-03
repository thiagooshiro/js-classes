// filter.js

// filter: Cria um novo array com todos os elementos que passarem em um teste implementado pela função fornecida.

const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((numero) => {
  return numero % 2 === 0;
  // A função fornecida para o filter testa se o número é par.
  // Se o teste retornar true, o número é incluído no novo array.
});

console.log(pares); // Saída: [2, 4]
// O método filter retorna um novo array com os elementos que passaram no teste,
// sem modificar o array original.

// filter é útil quando você quer selecionar apenas certos elementos de um array
// que atendam a um critério específico.

const frutas = ['banana', 'maçã', 'pera', 'uva', 'ameixa', 'kiwi', 'figo'];

const frutasComA = frutas.filter((fruta) => {
  return fruta.includes('a');
  // A função fornecida para o filter testa se a palavra contém a letra 'a'.
});

console.log(frutasComA); // ["banana", "maçã", "pera", "ameixa", ]
