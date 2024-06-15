// 14 - Crie um programa que conta quantas vogais possui uma palavra

let pala = 'Qualquer'

function contaVogais(palavra) {
    let vogais = ['a', 'e', 'i', 'o', 'u']
    contador = 0
    for (let letra of palavra) {
       if(vogais.includes(letra)) {
            contador += 1
            console.log(letra)
       }
    }
    return contador
}

console.log(contaVogais(pala))


const teste = (a ,b) => {
    return a + b
}


console.log(teste(5, 4))