// 13  - Crie uma função que receba como parametro uma lista de palavras e uma letra e filtra a lista a partir dessa letra.

const produtos = [
    "Café",
    "Arroz",
    "Feijão",
    "Azeite de Oliva",
    "Pão",
    "Leite",
    "Queijo",
    "Manteiga",
    "Macarrão",
    "Chocolate"
];


function filtraLetra(lista, letra) {
    const listaFiltrada = []
    for (item of lista) {
       if(item.includes(letra)){
         listaFiltrada.push(item)
       }
    }
    return listaFiltrada
}

console.log(filtraLetra(produtos, 'a'))