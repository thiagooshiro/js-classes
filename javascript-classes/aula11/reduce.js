// reduce.js

// reduce: Aplica uma função de acumulação a cada elemento do array (da esquerda para a direita),
// resultando em um único valor final.

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
  // A função fornecida para o reduce recebe o acumulador e o valor atual do array.
  // Ela retorna a soma do acumulador e do valor atual.
}, 0); // 0 é o valor inicial do acumulador.

console.log(soma); // Saída: 15
// O método reduce retorna um único valor que é o resultado da acumulação de todos os elementos do array.

// reduce é útil quando você quer combinar todos os elementos de um array em um único valor,
// como calcular uma soma, produto, ou concatenar strings.

const palavras = ['banana', 'maçã', 'pera', 'uva', 'ameixa'];

const frase = palavras.reduce((acumulador, palavra) => {
  return acumulador + ' ' + palavra;
  // A função fornecida para o reduce combina todas as palavras em uma única string,
  // separando-as por espaços.
}, 'Frutas:'); // "Frutas:" é o valor inicial do acumulador.

console.log(frase); // "Frutas: banana maçã pera uva ameixa"


//Reduce está entre as mais flexíveis funções agregadoras, podendo construir novas estruturas totalmente;
//Veja o "reduce2.js" e "reduce3.js" para ver exemplos mais saborosos com reduce.
