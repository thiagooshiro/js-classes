// Estrutura sintática do While
let contador = 3


console.log("Enquanto a condição for verdadeira, o while executara os comandos dentro das chaves que o delimitam");

while (contador > 0) {
    console.log('Efeito')
    console.log(`Essa linha será executada`)
    console.log(contador)
    contador = contador - 1
} 


//Exemplo 2
let contador2 = 0
while (contador2 < 10) {
    contador2 +=1
    console.log(contador2)
}
    