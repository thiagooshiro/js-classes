# Lista de Exercícios: Manipulação de JSON em JavaScript

## Olá, aventureiros do JavaScript! 🌟

Bem-vindos a mais uma jornada épica no mundo da programação! Hoje, vamos explorar as maravilhas do **JSON** (JavaScript Object Notation) e como ele se torna seu melhor amigo na troca de dados. Preparem-se para um passeio cheio de desafios que vão desde os básicos até os mais intrigantes. 🚀

### Como Realizar os Exercícios

- **Leia atentamente** o enunciado de cada exercício.
- **Crie funções** para resolver os problemas propostos. Cada exercício foi pensado para que você crie uma função que, quando chamada, resolva o desafio.
- **Não tenha pressa!** Entenda o que cada parte do código faz e, principalmente, **divirta-se** enquanto aprende.
- **Experimente e adapte**: Os exercícios foram feitos para estimular sua criatividade. Se sentir vontade de ir além, vá em frente! Afinal, a programação é sobre encontrar soluções de maneira única.
- **Lembre-se do nosso exercício especial** 😉. Ele pode ser uma ferramenta valiosa em outras partes dessa lista!

## Exercícios

### **Exercício Especial: Criando uma Função de Fetch para Retornar JSON como Objetos JS**

Aqui vai um desafio especial para você, que gosta de estar preparado para tudo! Crie uma função chamada `obterProdutos` que faz uma requisição `fetch` ao arquivo `produtos.json`. Essa função deve retornar uma `Promise` que resolve para uma lista de objetos JavaScript representando os produtos. Não exiba nada na tela ou no console dentro dessa função.

E olha só... essa função pode vir a ser muito útil nos próximos exercícios. Fique de olho! 😉

### **Exercício 1: Conversão de Objeto JavaScript para JSON**

Crie uma função chamada `converterObjetoParaJSON` que recebe um objeto JavaScript representando um produto com as propriedades `nome`, `preco`, e `estoque`. Use `JSON.stringify()` para converter o objeto em uma string JSON. Exiba a string JSON no console.

### **Exercício 2: Conversão de JSON para Objeto JavaScript**

Crie uma função chamada `converterJSONParaObjeto` que recebe uma string JSON representando um produto. Use `JSON.parse()` para converter a string em um objeto JavaScript. A função deve acessar e exibir as propriedades do objeto no console.

### **Exercício 3: Fazendo uma Requisição com Fetch e Convertendo a Resposta**

Crie uma função chamada `carregarProdutos` que faz uma requisição usando `fetch` ao arquivo `produtos.json`. A função deve converter a resposta para um objeto JavaScript e exibir os produtos no console.

### **Exercício 4: Filtrando Produtos com Base no Preço e Exibindo no HTML**

Agora vamos trazer um pouco de interação! 🎉 Crie uma função chamada `filtrarProdutosPorPreco` que faz uma requisição `fetch` ao arquivo `produtos.json`. A função deve filtrar os produtos com preço acima de um valor específico inserido pelo usuário. Em seguida, exiba os produtos filtrados em uma lista no HTML.

O HTML já está estruturado, sua missão é implementar a lógica do fetch e do filtro. Desafiante, mas você vai tirar de letra!

### **Exercício 5: Calculando o Valor Total do Estoque e Exibindo no HTML**

Crie uma função chamada `calcularValorTotalEstoque` que faz uma requisição `fetch` ao arquivo `produtos.json`. A função deve utilizar o método `reduce` para calcular o valor total do estoque de todos os produtos (preço x quantidade). Exiba o valor total calculado em um elemento `<p>` no HTML.

### **Exercício 6: Listando Nomes e Preços de Produtos com Map e Exibindo no HTML**

Crie uma função chamada `listarNomesEPrecos` que faz uma requisição `fetch` ao arquivo `produtos.json`. A função deve utilizar o método `map` para criar um novo array contendo apenas os nomes e os preços dos produtos. Em seguida, exiba esses nomes e preços como itens de uma lista (`<ul>`) no HTML.

## Conclusão

Espero que você se divirta enquanto explora o JSON com esses exercícios! Cada função que você criar vai ajudá-lo a compreender melhor como trabalhar com dados de maneira eficiente e criativa. Lembre-se: o aprendizado é um processo, e cada passo que você dá o aproxima mais do domínio completo dessas ferramentas incríveis.

Então, mãos à obra, e que o código esteja com você! 😄💻
