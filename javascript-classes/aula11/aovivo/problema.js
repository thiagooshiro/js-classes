amigos = ['Bruna', 'Rodrigo', 'Joana', 'Luiz', 'Pedro', 'Juliana']

listaFiltrada = []

caracter = 'J'
// for (nome of amigos) {
//     if (nome[0] === caracter) {
//         console.log(nome)
//         listaFiltrada.push(nome)
//     }
// } 

console.log('Lista Filtrada: ', listaFiltrada)


novaLista = amigos.filter((element) => {
    if (element.includes(caracter)) {
        return true
    }
})

console.log(novaLista)


cidade = ['Belo Horizonte', 'Ouro Preto', 'Mariana', 'Contagem', 'Ponte Nova', 'Sabará']


novosAmigos =  amigos.reduce((acc, element, index) => {
    acc.push({ nome: element, cidade: cidade[index] })
    return acc
}, [])

console.log('Lista Objt', novosAmigos)


