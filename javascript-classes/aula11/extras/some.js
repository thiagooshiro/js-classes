
// some.js


// O método .some() verifica se pelo menos um elemento do array atende à condição especificada. Retorna true se pelo menos um elemento satisfaz a condição; caso contrário, retorna false.


const animais = [
    { especie: 'leão', idade: 5 },
    { especie: 'tigre', idade: 3 },
    { especie: 'elefante', idade: 10 }
  ];
  
  const temAnimalVelho = animais.some((animal) => {
    return animal.idade > 6;
    // A função fornecida para o some testa se a idade do animal é maior que 6.
    // Se pelo menos um animal atender a essa condição, some retornará true.
  });
  
  console.log(temAnimalVelho); // Saída: true
  // O método some retorna true porque há um animal (elefante) com mais de 6 anos.
  
  // some é útil quando você precisa verificar se ao menos um elemento de um array atende a um critério específico.
  