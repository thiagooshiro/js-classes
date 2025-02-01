async function carregarProdutos() {
    try {
        url = './produtos.json'
        // Fazendo a requisição ao arquivo JSON e aguardando a resposta
        const response = await fetch(url);

        // Convertendo a resposta para JSON e aguardando a conversão
        const produtos = await response.json();

        // Exibindo os produtos no console
        console.log(produtos);

        // Iterando sobre os produtos e exibindo as propriedades
        produtos.forEach(produto => {
            console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}, Estoque: ${produto.estoque}`);
        });

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// Chamando a função
carregarProdutos();