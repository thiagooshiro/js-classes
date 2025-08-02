// 2 - Crie um algoritmo que lê uma palavra e imprime as letras separadamente e cada letra em caixa alta (maiúscula)

let palavra = 'Rodrigo'

let nomezao = ''

for(let i = 0; i < palavra.length; i += 1) {
    nomezao = nomezao + palavra[i].toUpperCase()
    // console.log(palavra[i].toUpperCase())
}
console.log(nomezao)

let nome = 'Bruno'
for(let letra of nome) {
    console.log(letra)
}

