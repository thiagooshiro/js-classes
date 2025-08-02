let cadastros = ['Bruno', 'Arthur', 'Gabriel', 'Lucas', 'Amanda', 'Bárbara']
                // 0        1          2          3       4          5
console.log(cadastros.length) // 6
console.log(cadastros[cadastros.length - 1]) // Imprime o último item do array cadastros, o indice 5 , 'Bárbara'


console.log(cadastros[0]) // Cadastros indice 0 é o primeiro item da lista.

//Propriedades de Array:

// Array.length
// Retorna o valor da extensão do array (numérico)
console.log(cadastros.length) 


//Array.push 
// Adiciona um ou mais valores AO FINAL DO array;
cadastros.push('Diogo')

console.log(cadastros)

//Array.pop
// Remove um valor do FINAL DO ARRAY.

let ultimo = cadastros.pop() // O método pop retorna o valor removido
console.log(ultimo) // Valor removido da lista (no caso, 'Diogo')

console.log(cadastros) // Lista sem o Diogo


//Array.shift
// Remove um valor no INICIO DA LISTA.

let primeiro = cadastros.shift() //remove o primeiro item da lista (Bruno) e retorna esse valor.
console.log(primeiro) // Retorna o valor removido (Bruno)

console.log(cadastros)// Retorna lista sem o valor 'Bruno' 


//Array.unshift
//Adiciona um ou mais valores no íncio do Array

cadastros.unshift('Maria', 'João') //valores adicionados no começo da lista

console.log(cadastros) //Array atualizado com 'Maria' e 'João' como primeiro e segundo valores do array;

//Array.splice
//
let frutas = ['Maçã', 'Pera', 'Banana', 'Uva', 'Abacate']
frutas.splice(0, 2, 'Abacate') // A partir do índice de referência (primeiro número), deleta uma quantidade de itens igual ao segundo numero e adiciona na lista os valores subsequentes. 

console.log(frutas) //


//Array.slice
//Cria cópia superficial do array a partir dos índices de referência;
frutas = ['Maçã', 'Pera', 'Banana', 'Uva', 'Abacate']
let cortadinho = frutas.slice(1,3) // A partir dos indices 1 e 3 a cópia é criada, mas sem incluir o valor final (3), ou seja, os índices incluídos na cópia são os indices 1 e 2 ('Pera' e 'Banana')
console.log(cortadinho) //Retorna array com itens 'Pera' e 'Banana'

console.log(frutas) //Array original permanece intacto.


//Array.includes
//O método includes retorna true ou false se o valor informado existir dentro da lista (ou da string)
let amigos = ['Filipe', 'Karina', 'Luiz', 'Flávio', 'Jéssica', 'João']
console.log(amigos.includes('João')) // true
console.log(amigos.includes('a')) // false - > porque não existe um elemento 'a' na lista, embora alguns nomes possuam esse caracter.

let numeros = [1, 42, 27, 35, 4.72]

console.log(numeros.includes(2)) // true

