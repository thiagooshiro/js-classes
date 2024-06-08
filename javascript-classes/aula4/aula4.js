//Estrutura sintática do "for"
// let nome = 'qualquer'
// for (let i = 0;   i < nome.length; i+=1) {
//     console.log(nome[i])
// }



// // Iteração sobre listas e contador resumido em ++
let minha_lista = ['abóbora', 'morango', 'uva']

// for (let i = 0; i < minha_lista.length; i++) {
//     console.log(minha_lista[i])
// }

// // // for - in -> imprime os índices da lista sobre a qual iteramos.

for (let indice in minha_lista){
    console.log(indice)
}
 
// // for - of   -> imprime os valores da lista sobre a qual iteramos;
let minhaLista = ['abóbora', 'morango', 'uva']

for (let alimento of minhaLista) {
    console.log(alimento)
}

let dinheiros = ['dolar', 'euro', 'real', 'cruzado']

for (let i = 0; i < minha_lista.length; i++) {
    console.log(minha_lista[i][minha_lista[i].length - 1])
}
// num = 0
// condição = true
// while (condição || num < 5) {
//     console.log('Oi povo!')
//     break
// }
