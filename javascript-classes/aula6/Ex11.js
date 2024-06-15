// 11 - Crie uma função que recebe como parâmetro um nome e imprime no console uma mensagem de boas vindas

function sejaBemVindo(nome){
    let resposta = `Seja bem vindo ${nome}`
    return resposta
}

console.log(sejaBemVindo('Vitor'))

function sejaMuitoBemVindo(nome) {
    console.log(`Seja MUITO bem vindo ${nome}`)
}


sejaMuitoBemVindo('Daniel')