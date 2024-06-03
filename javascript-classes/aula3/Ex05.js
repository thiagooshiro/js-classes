// 5 - Crie um programa que recebe um número e realiza o somatório de todos os números até aquele valor, e imprime o valor total da soma. Ex: o somatório de 6 é 1 + 2 + 3 + 4 + 5 + 6 = 21


let numero = 6
let contador = 1

let soma = 0
while (contador <= numero) {
    soma += contador
    contador +=1
}

console.log(soma)
