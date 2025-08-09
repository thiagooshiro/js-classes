// Revisão


//Declaração de variáveis:

var nome = 'Thiago' // string

let idade = 35 // number (int)

const altura = 1.69 // number (float)

let vivo = true // booleano

//Evitem usar "var" não é mais usual.

//Tipos avançados de variáveis:

let frutas = ['banana', 'maçã', 'morango'] //array

//objeto:
let estudante = { 
    'nome': 'Amanda',
    'matricula': 15016,
    'data_nascimento': '20/08/1996',
    'status': 'active',
    'materias': ['matemática', 'história', 'biologia']
}  

// Acessando propriedades de objetos
console.log(estudante.nome)  //sintaxe com ponto
console.log(estudante['nome']) //sintaxe com colchete


//Estruturas condicionais...

idade = 18

// Sintaxe básica:
if (idade >= 18) {
    console.log('pode tirar carteira')
} else {
    console.log('Não pode tirar carteira')
}

// Quando temos mais de três condições precisamos encadear dois if/else
let numero = 3

if (numero > 0) {
    console.log('É positivo')
} else if (numero < 0) {
    console.log('É negativo')
} else {
    console.log('É igual a zero')
}


//Laços de Repetição: 

//While:
let contador = 0
while(contador < 10){
    console.log(contador)
    contador += 1
}

//for:

let alguem = ['eu', 'você', 'tu', 'ele', 'nós']
for(let i = 0; i < alguem.length; i+= 1){
    console.log(alguem[i])
}

const times = ['Flamengo', 'Cruzeiro', 'Atlético', 'Botafogo']
for(let time of times) {
    console.log(time)
}

const palavra = 'paralelepipedo' 

for (indice in palavra) {
    console.log(indice) // cada indice da palavra paralelepiedo (ou seja, de 0 a 13)
}


