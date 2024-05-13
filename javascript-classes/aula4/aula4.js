// Estrutura sintática do "for"
// for (let i = 0;   i < 5; i+=1) {
//     let nome = 'qualquer'
//     console.log(nome[i])
// }



// // Iteração sobre listas e contador resumido em ++
let minha_lista = ['abóbora', 'morango', 'uva']

// for (let i = 0; i <= minha_lista.length; i++) {
//     console.log(minha_lista[i])
// }

// // // for - in -> imprime os índices da lista sobre a qual iteramos.

for (let indice in minha_lista){
    console.log(indice)
}
 
// // for - of   -> imprime os valores da lista sobre a qual iteramos;
minha_lista = ['abóbora', 'morango', 'uva']

for (alimento of minha_lista) {
    console.log(alimento)
}

let dinheiros = ['dolar', 'euro', 'real', 'cruzado']

for (let i = 0; i < minha_lista.length; i++) {
    console.log(minha_lista[i][minha_lista[i].length - 1])
}