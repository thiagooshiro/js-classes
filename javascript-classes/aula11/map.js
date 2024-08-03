// map.js

// map: Cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((numero, index) => {
  return numero * 2;
  // A função fornecida para o map recebe cada elemento do array (numero) e seu índice (index)
  // e retorna o valor do elemento multiplicado por 2.
});

console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
// O método map retorna um novo array com os valores transformados, sem modificar o array original.

// map é útil quando você quer transformar cada elemento de um array de alguma forma,
// resultando em um novo array com os elementos transformados.

const palavras = ['banana', 'maçã', 'pera', 'uva', 'ameixa'];

const palavrasComExclamacao = palavras.map((palavra) => {
  return palavra + '!';
  // A função fornecida para o map adiciona uma exclamação ao final de cada palavra.
});

console.log(palavrasComExclamacao); // ["banana!", "maçã!", "pera!", "uva!", "ameixa!"]
