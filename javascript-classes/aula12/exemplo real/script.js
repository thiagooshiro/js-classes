// URLs base da API do TheMealDB
const API_URL_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const API_URL_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

// Seleciona elementos do DOM
const categorySelect = document.getElementById('category-select');
const recipeContainer = document.getElementById('recipe-container');

// Função que busca e popula o select com categorias
async function carregarCategorias() {
    try {
        const response = await fetch(API_URL_CATEGORIES);
        const data = await response.json();
        const categorias = data.categories;

        categorias.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
    }
}

// Função que busca receitas por categoria
async function buscarReceitasPorCategoria(categoria) {
    try {
        const response = await fetch(`${API_URL_BY_CATEGORY}${categoria}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        return [];
    }
}

// Função que renderiza receitas na tela
function renderizarReceitas(receitas) {
    recipeContainer.innerHTML = ''; // Limpa os resultados anteriores
    if (receitas) {
        receitas.forEach(receita => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            
            recipeElement.innerHTML = `
                <img src="${receita.strMealThumb}" alt="${receita.strMeal}">
                <h2>${receita.strMeal}</h2>
            `;
            
            // Adiciona um evento de clique para cada card de receita
            recipeElement.addEventListener('click', () => {
                // Redireciona o usuário para a página de detalhes com o ID da receita na URL
                window.location.href = `details.html?id=${receita.idMeal}`;
            });
            
            recipeContainer.appendChild(recipeElement);
        });
    } else {
        recipeContainer.innerHTML = '<p>Nenhuma receita encontrada.</p>';
    }
}

// Evento de mudança de categoria
categorySelect.addEventListener('change', async () => {
    const categoria = categorySelect.value;
    if (categoria) {
        const receitas = await buscarReceitasPorCategoria(categoria);
        renderizarReceitas(receitas);
    }
});

// Carrega as categorias ao inicializar a página
carregarCategorias();
