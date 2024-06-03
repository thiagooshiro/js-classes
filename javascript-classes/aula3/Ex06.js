// 6 - Crie um programa que recebe como entrada uma lista e imprime o menor valor da lista com a seguinte mensagem: "O menor valor dessa lista é..."
let menorLista = [0, 16, -22, 42, 55, 23, 12];
// verificar cada valor da lista.
// saber a extensão da lista
// loop pra percorrer cada valor.
// condição pra verificar qual menor valor
// comparando o atual com o anterior

let contador = 0
let menor = null
while (contador < menorLista.length){
    if (menorLista[contador] < menor || menor === null){
        menor = menorLista[contador]
    }
    contador +=1 
}

console.log(menor)