// reduce.js

/*
Problema:
Alguém fez várias anotações em um caderno sobre os presentes favoritos que seus amigos gostariam de ganhar no final do ano. Cada amigo mencionou três itens diferentes em momentos diferentes. Agora, queremos organizar essa lista de presentes em um formato onde cada amigo tenha uma lista com os itens que gostaria de ganhar.

Lista de amigos:
- Ana
- Bruno
- Carlos
- Daniela
- Eduardo

Lista de presentes:
- Ana: Livro, Caneta, Mochila
- Bruno: Bicicleta, Relógio, Tênis
- Carlos: Caderno, Mochila, Lápis
- Daniela: Perfume, Brincos, Bolsa
- Eduardo: Relógio, Livro, Caneta

Vamos usar o método reduce para transformar essa lista de presentes em um objeto onde cada amigo é uma chave com sua respectiva lista de presentes.
*/

// Lista de presentes desejados
const presentes = [
    { nome: 'Ana', presente: 'Livro' },
    { nome: 'Ana', presente: 'Caneta' },
    { nome: 'Ana', presente: 'Mochila' },
    { nome: 'Bruno', presente: 'Bicicleta' },
    { nome: 'Bruno', presente: 'Relógio' },
    { nome: 'Bruno', presente: 'Tênis' },
    { nome: 'Carlos', presente: 'Caderno' },
    { nome: 'Carlos', presente: 'Mochila' },
    { nome: 'Carlos', presente: 'Lápis' },
    { nome: 'Daniela', presente: 'Perfume' },
    { nome: 'Daniela', presente: 'Brincos' },
    { nome: 'Daniela', presente: 'Bolsa' },
    { nome: 'Eduardo', presente: 'Relógio' },
    { nome: 'Eduardo', presente: 'Livro' },
    { nome: 'Eduardo', presente: 'Caneta' }
  ];
  
  // Usando reduce para agrupar presentes por amigo
  const presentesPorAmigo = presentes.reduce((acumulador, itemAtual) => {
    const { nome, presente } = itemAtual;
  
    if (!acumulador[nome]) {
      // Se o acumulador não tem essa chave ainda, cria um array vazio para o amigo
      acumulador[nome] = [];
    }
  
    // Adiciona o presente à lista do amigo correspondente
    acumulador[nome].push(presente);
  
    return acumulador;
  }, {}); // Inicia o acumulador como um objeto vazio
  
  console.log(presentesPorAmigo);
  /*
  Saída:
  {
    Ana: ['Livro', 'Caneta', 'Mochila'],
    Bruno: ['Bicicleta', 'Relógio', 'Tênis'],
    Carlos: ['Caderno', 'Mochila', 'Lápis'],
    Daniela: ['Perfume', 'Brincos', 'Bolsa'],
    Eduardo: ['Relógio', 'Livro', 'Caneta']
  }
  */
  
  // Explicação:
  // O método reduce é usado aqui para transformar a lista de presentes em um objeto onde cada chave
  // é o nome de um amigo e o valor é um array de presentes que ele deseja ganhar.
  // A função fornecida para reduce recebe o acumulador (inicialmente um objeto vazio) e o item atual
  // do array de presentes. Ela verifica se o nome do amigo já existe como uma chave no acumulador.
  // Se não existir, cria um array vazio para aquele amigo. Depois, adiciona o presente à lista do amigo.
  // O resultado final é um objeto que agrupa todos os presentes por amigo.
  



