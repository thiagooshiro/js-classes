// Operações com operadores lógicos.

// O resultado será sempre um valor boooleano!

//Operador maior que (>): 
console.log(16 > 24); // false
console.log(16 > 8) // true
console.log(8 > 8) // false

// Operador maior ou igual (>=) 

console.log(8 >= 8) //true
console.log(9 >= 2) // true
console.log(0 >= -2) // true
console.log(9 >= 16) // false

//Operador menor que (<):
console.log(8 < 12) // true
console.log(12 < 7) // false
console.log(16 < 16) // false

//Operador menor ou igual (<=)
console.log(16 <= 23) //true
console.log(16 <= 16) // true
console.log(23 <= 16) // false


// Operador de igualdade (==)
let n1 = 5 //number
let n2 = '5'  //string

console.log(n1 == n2)

let trem = true //boolean
let outroTrem = '1' // string

console.log(trem == outroTrem) // true
outroTrem = 0
console.log(trem == outroTrem) //false
trem = false
outroTrem = 'false'
console.log(trem == outroTrem) // false


// Operador de igualdade estrita (===)
// Para igualdade estrita tanto o tipo quanto o valor precisam ser os mesmos.
//Prefira usar esse operador para ter mais consistência no seu código.
n1 = 4
n2 = '4'

console.log(n1 === n2) //false

let verdadeiro = true
let numero = 1
console.log(verdadeiro === numero)

//Operador and (&&):
verdadeiro = true 
let falso = false

console.log(falso && falso) //false  0 * 0 -> 0
console.log(falso && verdadeiro) //false 0 * 1 -> 0
console.log(verdadeiro && falso) //false 1 * 0 -> 0
console.log(verdadeiro && verdadeiro) //true 1 * 1 -> 1

//Operador ou (||)

verdadeiro = true 
falso = false

console.log(falso || falso) //false 0 + 0 -> 0
console.log(falso || verdadeiro) // true 0 + 1 -> 1
console.log(verdadeiro || falso) // true 1 + 0 -> 1
console.log(verdadeiro || verdadeiro) // true 1 + 1 -> 1

//Operador de negação (!):
let valor = true

console.log(!valor) // false