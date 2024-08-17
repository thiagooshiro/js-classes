### **Orientações para os Alunos:**

1. **Implemente a Função `buscarDetalhesReceita`:**
   - Essa função deve fazer uma requisição `fetch` à API do TheMealDB usando o ID da receita.
   - Você deve transformar a resposta em um objeto JavaScript e utilizar os dados para preencher o conteúdo da página.

2. **Utilize a Função `obterIdDaURL`:**
   - Esta função já está implementada e retorna o ID da receita a partir da URL.
   - Utilize este ID como argumento na função `buscarDetalhesReceita` para buscar os detalhes corretos.

3. **Atualize o DOM:**
   - Preencha os elementos da página (`recipe-title`, `recipe-image`, `recipe-instructions`) com os dados retornados pela API.

4. **Dicas:**
   - Certifique-se de que a requisição à API está correta e que você está utilizando o ID da receita adequadamente.
   - Teste a função com diferentes IDs para garantir que os detalhes estão sendo carregados corretamente.

