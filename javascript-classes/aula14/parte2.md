Requisito 1 - Filtro por Nome da Receita:

O sistema deve permitir que o usuário pesquise receitas por nome.
Ao digitar no campo de pesquisa de nome, o sistema deverá consultar a API search.php?s=<nome-da-receita> para retornar as receitas correspondentes.
As receitas encontradas devem ser exibidas dinamicamente na página, com informações como nome, imagem e detalhes.
Requisito 2 - Filtro por Categoria:

O sistema deve permitir que o usuário filtre as receitas por categoria.
As categorias de receitas devem ser carregadas de forma dinâmica a partir da API search.php?c=<categoria>.
Ao selecionar uma categoria, o sistema deve buscar todas as receitas dessa categoria e exibi-las na tela.
Requisito 3 - Exibição dos Detalhes da Receita:

O sistema deve permitir que o usuário clique em uma receita para visualizar os detalhes completos dela.
Ao clicar na receita, o sistema deve consultar a API lookup.php?i=<id-da-receita> para obter detalhes completos da receita selecionada, como ingredientes e instruções.
As informações detalhadas devem ser apresentadas de forma clara e organizada.
Requisito 4 - Receita Aleatória:

O sistema deve permitir que o usuário clique em um botão para visualizar uma receita aleatória.
Ao clicar no botão de "Receita Aleatória", o sistema deve fazer uma consulta à API random.php para obter uma receita aleatória e exibi-la na tela.