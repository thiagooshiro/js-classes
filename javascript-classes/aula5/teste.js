// let copyNumbers = [...numeros]

// numeros[2] = 4

// numeros.push(5)

// console.log('depois do push:', numeros)


// numeros.pop()

// console.log('depois do pop:', numeros)
// console.log('copia', copyNumbers)

// numeros.unshift('batata')

// console.log('unshift: ', numeros)

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];

console.log('original:', names)
//QUERO TROCAR: "Charlie" -> "Carlos"
names.splice(0, 2, 'Carlos', 'Roberto', 'Amanda', 'Luísa', 'Douglas')

console.log('pós-splice:', names)


// Se quero medir um array?

console.log(names.length)

let numeros = ["banana",4, 3, 1, 0, -5, 0.22, 2 ,3 , "amanda", "abacate"]

numeros.sort()

console.log(numeros)

console.log(numeros.indexOf("amanda"))
