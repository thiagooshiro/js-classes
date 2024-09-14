### **Projeto de E-commerce: Fake Store API**

#### **Objetivo do Projeto**
Você vai desenvolver uma aplicação de e-commerce dinâmica, onde será capaz de consumir dados de produtos da **Fake Store API**, renderizá-los na página e implementar funcionalidades típicas de uma loja virtual, como adicionar itens ao carrinho e filtrar produtos por categoria.

#### **Requisitos do Projeto**

1. **Listagem de Produtos**
   - A página deve buscar produtos da API e exibi-los dinamicamente.
   - **Referência**: Use a função `fetchProducts()` e `renderProducts()` como exemplo de como buscar e exibir produtos na página.
   
2. **Adicionar Produtos ao Carrinho**
   - Implemente a funcionalidade de adicionar produtos ao carrinho de compras.
   - **Referência**: Veja como a função `addToCart()` é chamada dentro da função `renderProducts()` para manipular os cliques no botão "Adicionar ao Carrinho".
   
3. **Exibir Carrinho de Compras**
   - O carrinho de compras deve ser exibido em uma seção à parte, mostrando os itens que foram adicionados.
   - **Dica**: Você pode usar o localStorage para salvar o estado do carrinho entre atualizações da página.
   
4. **Filtrar Produtos por Categoria**
   - Crie um menu de categorias que permita filtrar produtos exibidos na página.
   - **Referência**: Adapte a função `fetchProducts()` para buscar produtos por categoria, utilizando o endpoint `/products/category/:category`.
   
5. **Pesquisar Produtos por Nome**
   - Implemente uma barra de pesquisa para encontrar produtos pelo nome.
   - **Dica**: Use a função `searchProducts()` como base e filtre os produtos pelo nome utilizando JavaScript.

6. **Simular Processo de Checkout**
   - O usuário deve poder finalizar a compra, e o carrinho deve ser esvaziado após o processo de checkout.
   - **Referência**: Use a função `checkout()` para simular o processo de finalização de compras.

#### **Orientações para Implementação**
- **Modularidade**: As funções fornecidas são um bom exemplo de como manter o código modular, separando a lógica de busca e de renderização dos dados.
- **Manipulação de DOM**: Veja como os produtos são dinamicamente inseridos no DOM dentro da função `renderProducts()`, e use essa abordagem para exibir outros elementos, como o carrinho de compras.
- **Eventos**: Em vez de usar `onClick`, os eventos são manipulados com `addEventListener`, o que permite adicionar funcionalidades de forma mais organizada.

#### **Desafios Adicionais**
- **Salvar o Carrinho no localStorage**: Faça com que o carrinho de compras persista entre atualizações da página.
- **Edição de Quantidade no Carrinho**: Implemente um controle para editar a quantidade de itens diretamente no carrinho.
- **Notificação de Produto Adicionado**: Crie uma notificação para o usuário quando um item for adicionado ao carrinho.

---

### **Apresentação do Projeto**
Neste projeto, você vai construir sua aplicação de e-commerce de maneira iterativa. Use as funções de exemplo como base para resolver problemas mais complexos. O foco está em como os dados são buscados e exibidos, além de manipular o DOM para criar interatividade. Conforme você avança, explore maneiras criativas de expandir a lógica fornecida e melhorar a experiência do usuário.

---

Esse tom direto ajuda a criar uma conexão mais próxima com o aluno, incentivando-o a participar ativamente no desenvolvimento do projeto!
```

---

### 2. **Filtro por Categoria**

**Descrição**: Crie uma função que faz uma requisição para listar todas as categorias disponíveis e outra que busca produtos filtrados por uma categoria selecionada.

- **Endpoint para buscar categorias**: `GET https://fakestoreapi.com/products/categories`
- **Endpoint para produtos por categoria**: `GET https://fakestoreapi.com/products/category/:category`

```javascript
async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        
        // # Escreva seu código aqui para exibir as categorias em um menu de filtro
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
    }
}

async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await response.json();
        
        // # Escreva seu código aqui para exibir os produtos filtrados por categoria
    } catch (error) {
        console.error('Erro ao buscar produtos por categoria:', error);
    }
}
```

---

### 3. **Adicionar ao Carrinho**

**Descrição**: Crie uma função que permite adicionar um produto ao carrinho de compras. O carrinho pode ser armazenado em uma lista local (array) e exibido ao usuário.

```javascript
let cart = [];

function addToCart(productId) {
    // # Escreva seu código aqui para adicionar o produto ao array de carrinho
}
```

---

### 4. **Atualizar o Carrinho e Exibir Total**

**Descrição**: Crie uma função que atualiza a quantidade de itens no carrinho e exibe o total da compra para o usuário.

```javascript
function updateCartDisplay() {
    // # Escreva seu código aqui para exibir os itens e o valor total do carrinho
}
```

---

### 5. **Simulação de Checkout**

**Descrição**: Crie uma função para simular o processo de checkout. Após o checkout, o carrinho deve ser esvaziado.

```javascript
function checkout() {
    // # Escreva seu código aqui para simular o checkout e esvaziar o carrinho
}
```

---

### 6. **Exibir Detalhes do Produto**

**Descrição**: Crie uma função que, ao clicar em um produto, exiba mais detalhes sobre ele (usando seu ID).

- **Endpoint**: `GET https://fakestoreapi.com/products/:id`

```javascript
async function fetchProductDetails(productId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
        
        // # Escreva seu código aqui para exibir os detalhes do produto
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
    }
}
```

---

### 7. **Barra de Pesquisa de Produtos**

**Descrição**: Crie uma barra de pesquisa que permite buscar produtos pelo nome e exibir os resultados.

```javascript
function searchProducts(query) {
    // # Escreva seu código aqui para buscar produtos que correspondam à pesquisa
}
```

---

### 8. **Contar Itens no Carrinho**

**Descrição**: Crie uma função que conte o número total de itens no carrinho.

```javascript
function countCartItems() {
    // # Escreva seu código aqui para contar e exibir a quantidade total de itens no carrinho
}
```

