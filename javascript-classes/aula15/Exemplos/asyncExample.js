// Exemplo usando async/await
async function fetchCategoriesAsync() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json()
        console.log(data)
        const categories = data.categories;
        const selectElement = document.getElementById('category-select');

        // Criar opções no select para cada categoria
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.strCategory;
            option.textContent = category.strCategory;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
    }
}

// Chamar a função para preencher o select
fetchCategoriesAsync();
