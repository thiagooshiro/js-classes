// reduce.js

/*
Problema:
Temos duas listas:
1. Uma lista com informações básicas de usuários.
2. Uma lista com atividades associadas a esses usuários.

Queremos combinar essas listas em uma única estrutura onde cada usuário é uma chave e o valor é um objeto contendo o nome do usuário e suas atividades.

Lista de usuários:
- { id: 1, nome: 'Ana' }
- { id: 2, nome: 'Bruno' }
- { id: 3, nome: 'Carlos' }

Lista de atividades:
- { usuarioId: 1, atividade: 'Login' }
- { usuarioId: 1, atividade: 'Compra' }
- { usuarioId: 2, atividade: 'Login' }
- { usuarioId: 3, atividade: 'Compra' }
- { usuarioId: 3, atividade: 'Feedback' }

Vamos usar o método reduce para combinar essas listas em uma única estrutura.
*/

// Lista de usuários
const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' },
    { id: 3, nome: 'Carlos' }
  ];
  
  // Lista de atividades
  const atividades = [
    { usuarioId: 1, atividade: 'Login' },
    { usuarioId: 1, atividade: 'Compra' },
    { usuarioId: 2, atividade: 'Login' },
    { usuarioId: 3, atividade: 'Compra' },
    { usuarioId: 3, atividade: 'Feedback' }
  ];
  
  // Primeiro, cria um objeto de usuário com ID como chave para acesso rápido
  const usuariosMap = usuarios.reduce((map, usuario) => {
    map[usuario.id] = { nome: usuario.nome, atividades: [] };
    return map;
  }, {});
  
  // Agora, adicione as atividades a cada usuário no objeto
  const resultado = atividades.reduce((acumulador, atividade) => {
    const { usuarioId, atividade: descricao } = atividade;
  
    if (acumulador[usuarioId]) {
      acumulador[usuarioId].atividades.push(descricao);
    }
  
    return acumulador;
  }, usuariosMap); // Inicia com o objeto de usuários mapeado
  
  console.log(resultado);
  /*
  Saída:
  {
    '1': {
      nome: 'Ana',
      atividades: ['Login', 'Compra']
    },
    '2': {
      nome: 'Bruno',
      atividades: ['Login']
    },
    '3': {
      nome: 'Carlos',
      atividades: ['Compra', 'Feedback']
    }
  }
  */
  
  // Explicação:
  // O método reduce é usado aqui em duas fases para combinar as listas de usuários e atividades.
  // Primeiro, criamos um mapa de usuários com IDs como chaves, onde cada chave tem um objeto contendo o nome do usuário e uma lista vazia de atividades.
  // Em seguida, usamos reduce novamente para adicionar as atividades de cada usuário ao mapa de usuários.
  // O resultado é um objeto onde cada chave é o ID de um usuário e o valor é um objeto com o nome do usuário e a lista de suas atividades.
  