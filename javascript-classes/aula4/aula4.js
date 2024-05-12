// Estrutura sintática do "for"

for (let i = 0;   i < 5; i+=1) {
    console.log(i)
    console.log('passei por um ciclo.')
}


// // Iteração sobre listas e contador resumido em ++
minha_lista = ['abóbora', 'morango', 'uva']

for (let i = 0; i < minha_lista.length; i++) {
    console.log(minha_lista[i])
}

// // for - in -> imprime os índices da lista sobre a qual iteramos.

for (alimentos in minha_lista){
    console.log(alimentos)
}
 
// for - of   -> imprime os valores da lista sobre a qual iteramos;

for (i of minha_lista) {
    console.log(i)
}