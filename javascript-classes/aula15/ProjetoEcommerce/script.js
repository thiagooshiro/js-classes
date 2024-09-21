const loginForm = document.getElementById('login-form')


// Função para exibir produtos (exemplo pronto)
async function fetchProducts() {
    const ALL_PRODUCTS_ENDPOINT = 'https://fakestoreapi.com/products'; // Endpoint para buscar todos os produtos
    const response = await fetch(ALL_PRODUCTS_ENDPOINT);
    const products = await response.json();
    console.log(products)
    renderProducts(products); // Chama a função para renderizar os produtos
}

// Função para renderizar produtos na página (exemplo pronto)
function renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Limpa o contêiner antes de renderizar os produtos

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
        `;

        // Adicionando event listener ao botão "Adicionar ao Carrinho"
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => addToCart(product.id));

        productContainer.appendChild(productCard);
    });
}

// A partir daqui é com vocês. =)

// Função para buscar produtos por categoria
async function fetchProductsByCategory(category) {
    const endpointCategoria = `https://fakestoreapi.com/products/category/${category}`; // Endpoint para buscar produtos por categoria
    // # Escreva o código para buscar produtos por categoria e renderizá-los
}

// Função para buscar um produto específico por ID
async function fetchProductById(productId) {
    const endpointProduto = `https://fakestoreapi.com/products/${productId}`; // Endpoint para buscar um produto específico por ID
    // # Escreva o código para buscar o produto por ID e exibir os detalhes
}

// Função para buscar todas as categorias
async function fetchCategories() {
    const endpointCategorias = 'https://fakestoreapi.com/products/categories'; // Endpoint para buscar todas as categorias
    // # Escreva o código para buscar as categorias e exibi-las
}

// Função para buscar produtos pelo nome (pesquisa)
function searchProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    // # Escreva o código para realizar a busca com base no searchQuery
}

// Função para adicionar produtos ao carrinho
function addToCart(productId) {
    // # Escreva o código para adicionar o produto ao carrinho
}

// Função para finalizar compra
function checkout() {
    // # Escreva o código para finalizar a compra
}

const loginName = document.getElementById('login-name')
const loginPassword = document.getElementById('login-password')
async function handleLogin(e) {
    e.preventDefault()
    const response = await fetch('./usuarios.json')
    console.log(response)
    const data = await response.json()
    console.log(data)
    for (usuario of data) { 
       if (usuario.nome == loginName && usuario.senha === loginPassword) {
            alert('Login bem sucedido')
       }
    }
}

async function handleInput(e) {
    console.log(e.target.value)
}


// Eventos de busca e checkout (já prontos)
document.getElementById('search-btn').addEventListener('click', searchProducts);
document.getElementById('checkout-btn').addEventListener('click', checkout);
document.getElementById('submit-btn').addEventListener('click', handleLogin)
loginName.addEventListener('change', (e) => handleInput(e))
loginPassword.addEventListener('change', (e) => handleInput(e))

// Exemplo de chamada para buscar produtos (ao carregar a página)
fetchProducts();
