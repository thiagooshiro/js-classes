// every.js

// O método .every() verifica se todos os elementos do array atendem à condição especificada. 
// Retorna true se todos os elementos satisfazem a condição; caso contrário, retorna false.

const animais = [
    { especie: 'leão', idade: 5 },
    { especie: 'tigre', idade: 3 },
    { especie: 'elefante', idade: 10 }
  ];
  
  const todosSaoMaioresQue2 = animais.every((animal) => {
    return animal.idade > 2;
    // A função fornecida para o every testa se a idade do animal é maior que 2.
    // Se todos os animais atenderem a essa condição, every retornará true.
  });
  
  console.log(todosSaoMaioresQue2); // Saída: true
  // O método every retorna true porque todos os animais têm mais de 2 anos.
  
  // every é útil quando você precisa garantir que todos os elementos de um array atendam a um critério específico.
  