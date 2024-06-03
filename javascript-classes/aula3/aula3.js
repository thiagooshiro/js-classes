// Estrutura sintática do While
let condicao = 3


console.log("Enquanto a condição for verdadeira, o while executara os comandos dentro das chaves que o delimitam");

while (condicao > 0) {
    console.log('Efeito')
    console.log(`Essa linha será executada`)
    condicao -= 1
} 

// console.log('Quando a condição não é mais verdadeira o script continua sua execução normal.')

let contador = 0
while (contador < 10) {
    contador +=1
    if(contador === 5) {
        continue
    }
    console.log(contador)
}
    