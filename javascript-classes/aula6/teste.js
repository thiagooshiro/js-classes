function somaNumeros(ref) {
    let soma = 0
    for (let i = 1; i <= ref; i += 1) {
    soma += i 
    console.log(soma)
}
}

const produtos = [
    "Café",
    "Arroz",
    "Feijão",
    "Azeite de Oliva",
    "Mate",
    "Pão",
    "Leite",
    "Queijo",
    "Manteiga",
    "Macarrão",
    "Chocolate"
];

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];


// contar quantas palavras possuem a letra "a"
// console.log(produtos.includes('Chocolate'))

// for (let produto of produtos) {
//     if (produto.includes('a')) {
//         console.log(produto)
//     }
// }

function procurarLetra(lista, letra) {
    for (let item of lista) {
        if (item.includes(letra)) {
            console.log(item)
        }
    }
}

procurarLetra(names, 'e')

procurarLetra(produtos, 'a')


let vogais = ['a', 'e', 'i', 'o', 'u']
let palavra = 'Mamão'

cont = 0
for (letra of palavra) {
    if (vogais.includes(letra)){
        cont += 1
    }
}
console.log(cont)


// 1 - Ler cada palavra da lista.
// 2 - Escolheu uma letra para filtrar, no caso a letra "a"
// 3 - Comparar a palavra lida com a letra "a"
// 3.1 - Se a palavra INCLUI a LETRA ESCOLHIDA.

