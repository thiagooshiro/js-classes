// URL base para buscar detalhes da receita por ID
const API_URL_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

// Função para buscar os detalhes da receita com base no ID
async function buscarDetalhesReceita(id) {
   // Implemente a função para buscar a receita por id;
   // Utilize a função auxiliar "obterIdDaURL" para conseguir estruturar sua chamada na API.

   // Dica:
   // 1. Faça uma requisição `fetch` utilizando o endpoint API_URL_DETAILS e o ID da receita.
   const rawData = await fetch(API_URL_DETAILS + id)
   
    
   // 2. Converta a resposta para JSON.
   const data = await rawData.json()

   // 3. Utilize o objeto retornado para preencher os detalhes da receita na página.
   console.log(data.meals[0])
   const responsaFormatada = data.meals[0]
   // 4. Atualize o título da receita, a imagem e as instruções no DOM.

   const tituloHMTL = document.getElementById('recipe-title')
   tituloHMTL.innerText = responsaFormatada.strMeal

   const imageHTML = document.getElementById('recipe-image')
   
   imageHTML.src = responsaFormatada.strMealThumb


   const instructionsHTML = document.getElementById('recipe-instructions')

   instructionsHTML.innerText = responsaFormatada.strInstructions

   // 5. Considere possíveis erros na requisição e trate-os utilizando um block Try Catch
   
   // Exemplo de como a URL pode ser estruturada:
   // const response = await fetch(`${API_URL_DETAILS}${id}`);
   // Continue a implementação...
}

// Função para extrair o ID da receita da URL
function obterIdDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const response =  urlParams.get('id');
    console.log(response)
    return response
}

// Carrega os detalhes da receita ao inicializar a página
const idReceita = obterIdDaURL();
if (idReceita) {
    buscarDetalhesReceita(idReceita);
}
