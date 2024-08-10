// Aqui temos uma string JSON que representa uma lista de alunos com suas notas
const alunosJSON = '[{"nome": "Maria", "nota": 9}, {"nome": "João", "nota": 8}, {"nome": "Pedro", "nota": 7}]';

// Convertemos a string JSON para um array de objetos JavaScript
const alunos = JSON.parse(alunosJSON);

// Agora podemos iterar sobre os elementos do array e acessar as propriedades de cada objeto
alunos.forEach(aluno => {
    console.log(`${aluno.nome} tirou nota ${aluno.nota}`);
});

// Saídas:
// Maria tirou nota 9
// João tirou nota 8
// Pedro tirou nota 7

// Também podemos calcular a média das notas dos alunos
let soma = 0;
alunos.forEach(aluno => {
    soma += aluno.nota;
});
const media = soma / alunos.length;
console.log(`Média das notas: ${media}`); // Saída: Média das notas: 8