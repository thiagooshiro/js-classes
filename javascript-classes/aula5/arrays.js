let alunos = ['Euler', 'Gabriel', 'Bruna', 'Rodrigo'];

//Podem ser acessados via índice:
console.log(alunos[0])

//Métodos de Arrays;
// 1° Método - length
let extensao = alunos.length // o método .length retorna o tamanho do array
console.log(extensao)

//Acessar o último valor da lista utilizando um truque com método .lenght

console.log(alunos[alunos.length -1])

//2° Método - pop
console.log('Antes', alunos)
alunos.pop()  // Método pop remove o último valor do array

console.log('Depois', alunos)


//3° Método - push

console.log(alunos)  // Contém 3 valores: Euler, Gabriel e Bruna
alunos.push('Amanda') // O nome Amanda será inserido como novo último item do array;
console.log(alunos)

//4° Método - shift

alunos.shift() // Método shift remove primeiro valor da lista;
console.log(alunos)

//5° Método - unshift

alunos.unshift('Georgia', 'Rodrigo') //Método unshift adiciona valores no ínico do array
console.log(alunos)

//6° Método - splice

alunos.splice(1, 2, 'Banana') // A partir de um índice de referência, remove um número n de elementos (segundo parametro), e adiciona o valores subquentes na lista a partir do índice de referência;
console.log(alunos)


//7° Método - slice
let frutas = ['Banana', 'Abobora', 'Tomate', 'Jabuticaba']

let resultado =  frutas.slice(2, 3) // Método slice 'recorta' um trecho do array a partir do índice de referência até o indice final (mas não inclui o índice final)

console.log(frutas)
console.log(resultado)


//8° Método - concat
let maisFrutas = ['Abacate', 'Morango']
let muitasFrutas = frutas.concat(maisFrutas) //Concatenar dois arrays formando um novo array;
console.log(frutas) //1° array
console.log(maisFrutas)// 2° array
console.log(muitasFrutas) // Arrays combinados

//9° Método - reverse
let numeros = [0, 1, 2, 3, 4]

console.log(numeros.reverse()) // Método reverse inverte a ordem dos elementos do array;

//10° Método - join
let nomes = ['Barbara', 'Jordana', 'Maria', 'Bruno', 'João']
console.log(nomes.join()) //Transforma o array numa string, a partir separador de referência, o separador padrão é uma vírgula


//11° Método - sort
nomes.sort() //Método sort modifica o array original, ordenando-o
console.log(nomes)

