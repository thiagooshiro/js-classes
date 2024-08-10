// Aqui temos uma string JSON que representa um produto
const jsonString = '{"nome":"Smartphone","preco":1500,"estoque":100}';

// O método JSON.parse transforma a string JSON em um objeto JavaScript
const produto = JSON.parse(jsonString);

// Agora podemos acessar as propriedades do objeto 'produto'
console.log(produto.nome);  // Saída: Smartphone
console.log(produto.preco); // Saída: 1500

// Também é possível acessar as chaves do objeto usando colchetes []
console.log(produto['estoque']); // Saída: 100

// Essa flexibilidade é útil para acessar chaves com nomes dinâmicos