// 12 - Crie uma função que recebe como parâmetro uma string e a divide em seus caracteres e imprime os caracteres de forma individual.

function quebraPalavra(palavra) {
    for (let letra of palavra) {
        console.log(letra)
    }
}

let nome = 'Thiago'

quebraPalavra(nome)