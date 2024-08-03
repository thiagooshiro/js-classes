// find.js

//O método .find() retorna o primeiro elemento do array que atende à condição especificada. 
//Se nenhum elemento atender à condição, retorna undefined.

const animais = [
    { especie: 'leão', idade: 5 },
    { especie: 'tigre', idade: 3 },
    { especie: 'elefante', idade: 10 }
  ];
  
  const animalEncontrado = animais.find((animal) => {
    return animal.especie === 'tigre';
    // A função fornecida para o find procura o primeiro animal cuja espécie é 'tigre'.
    // Se um animal atender a essa condição, find retornará esse animal.
  });
  
  console.log(animalEncontrado); // Saída: { especie: 'tigre', idade: 3 }
  // O método find retorna o primeiro animal que corresponde ao critério especificado (tigre).
  
  // find é útil quando você precisa encontrar um único elemento que atenda a um critério específico.
  