// Simulando o JSON
const filmes = [
    { nome: "O Poderoso Chefão", categoria: "Drama/Crime", ano: 1972 },
    { nome: "Star Wars: Uma Nova Esperança", categoria: "Ficção Científica/Aventura", ano: 1977 },
    { nome: "Cidadão Kane", categoria: "Drama", ano: 1941 },
    { nome: "Forrest Gump: O Contador de Histórias", categoria: "Drama/Romance", ano: 1994 },
    { nome: "Clube da Luta", categoria: "Drama", ano: 1999 },
    { nome: "Pulp Fiction: Tempo de Violência", categoria: "Crime/Drama", ano: 1994 },
    { nome: "Matrix", categoria: "Ficção Científica/Ação", ano: 1999 }
  ];
  
  // Função para renderizar a lista de filmes
  function renderMovies(movieArray) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Limpa a lista atual
  
    movieArray.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.textContent = `${movie.nome} - ${movie.categoria} (${movie.ano})`;
      movieList.appendChild(listItem);
    });
  }
  
  // Ordenar filmes por nome
  function sortMoviesByName() {
    const sortedMovies = [...filmes].sort((a, b) => a.nome.localeCompare(b.nome));
    renderMovies(sortedMovies);
  }
  
  // Evento de clique para ordenar filmes
  document.getElementById('sortByName').addEventListener('click', sortMoviesByName);
  
  // Renderizar lista inicial
  renderMovies(filmes);
  