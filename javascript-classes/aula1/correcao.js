
//1  - Crie um algoritmo que exiba na tela (terminal) a mensagem "Olá Mundo".
console.log('Olá Mundo!')

//2  - Crie um algoritmo que exiba na tela (terminal) seu nome. Por exemplo: "Olá, João Paulo."
let nome = 'Thiago'
console.log('Olá, ' + nome)
console.log('Olá,', nome)


//3  - Crie um algoritmo que exiba na tela (terminal) sua idade. Por exemplo: 17.
let idade = 17
console.log('Minha idade é', idade)

//4  - Crie um algoritmo que exiba na tela (terminal) (em linhas separadas) seu nome e sua idade.
console.log(nome)
console.log(idade)

//5  - Crie um algoritmo que exiba na tela (terminal) (na mesma linha) seu nome e sua idade.

console.log('Meu nome é', nome, 'eu tenho', idade, 'anos' )


//6  - Crie um algoritmo que exiba na tela (terminal) a soma de dois números inteiros.
console.log(35+7)

//7  - Crie um algoritmo que exiba na tela (terminal) a subtração de dois números inteiros.
console.log(14-10)

//8  - Crie um algoritmo que exiba na tela (terminal) a multiplicação de dois números inteiros.
console.log(40*3)


//9  - Crie um algoritmo que exiba na tela (terminal) a divisão de dois números inteiros.
console.log(10/2)


//10 - Crie um algoritmo que exiba na tela (terminal) o resto da divisão de dois números inteiros.
console.log(7%2)


//12 - Crie um algoritmo que exiba na tela (terminal) o quadrado de um número inteiro.
console.log(10**2)


//14 - Crie um algoritmo que exiba na tela (terminal) o tipo de uma variável cujo valor atribuído é "jpaulo@infinityschoool.com.br".
let email = "jpaulo@infinityschoool.com.br"

console.log(typeof (email))


//15 - Crie um algoritmo que recebe as seguintes informações:
//  o nome, idade, a fruta favorita e se o usuário é ou não aluno da Infinity School.
//  Imprima os valores no seguindo o exemplo:
//  Se as informações forem: "João", 34, "banana", as informações devem aparecer dessa forma no terminal:
//  Nome: João
//  Idade: 34
//  Fruta favorita: banana
//  Aluno Infinty: Sim  

nome = 'João'
idade = 31
let favorita = 'banana'
let alunoInfinity = true

console.log('Nome:', nome)
console.log('Idade:', idade)
console.log('Fruta favorita:', favorita)

if (alunoInfinity === true) {
    alunoInfinity = 'Sim'
} else {
    alunoInfinity = 'Não'
}

console.log('Aluno da Infinity?', alunoInfinity)