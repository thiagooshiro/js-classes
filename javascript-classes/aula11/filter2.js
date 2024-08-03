// map2.js

// Enunciado:
// Dado um array de objetos representando produtos, filtre todos os produtos
// que estão disponíveis em estoque, custam mais de R$100 e são do tipo "eletrônico".

const produtos = [
    { id: 1, nome: 'Smartphone', categoria: 'eletrônicos', preco: 1200, emEstoque: true },
    { id: 2, nome: 'Laptop', categoria: 'eletrônicos', preco: 2500, emEstoque: false },
    { id: 3, nome: 'Cadeira', categoria: 'móveis', preco: 450, emEstoque: true },
    { id: 4, nome: 'Televisão', categoria: 'eletrônicos', preco: 800, emEstoque: true },
    { id: 5, nome: 'Mesa', categoria: 'móveis', preco: 300, emEstoque: true }
  ];
  
  const produtosFiltrados = produtos.filter((produto) => {
    return produto.categoria === 'eletrônicos' && produto.preco > 100 && produto.emEstoque;
    // O filter verifica se o produto é eletrônico, custa mais de R$100 e está em estoque.
  });
  
  console.log(produtosFiltrados);
  // Saída esperada:
  // [
  //   { id: 1, nome: 'Smartphone', categoria: 'eletrônicos', preco: 1200, emEstoque: true },
  //   { id: 4, nome: 'Televisão', categoria: 'eletrônicos', preco: 800, emEstoque: true }
  // ]
  