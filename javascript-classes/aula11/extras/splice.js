// splice.js

// splice: Altera o conteúdo de um array adicionando, removendo ou substituindo elementos existentes. Modifica o array original e retorna um novo array com os elementos removidos.

const frutas = ['banana', 'maçã', 'pera', 'uva', 'ameixa'];

// Remover 2 elementos a partir do índice 2 e adicionar 'laranja' e 'kiwi'
const removidos = frutas.splice(2, 2, 'laranja', 'kiwi');

console.log(frutas); // ['banana', 'maçã', 'laranja', 'kiwi', 'ameixa']
// O método splice removeu 'pera' e 'uva' e adicionou 'laranja' e 'kiwi'.

console.log(removidos); // ['pera', 'uva']
// O array retornado contém os elementos que foram removidos.