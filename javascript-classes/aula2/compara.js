

// let nome = 'Thiago'

// //Semelhante (possui mesmo valor mas não necessariamente o mesmo tipo)
// console.log(5 == 5) //true
// console.log(5 == '5') //true  

// //Estritamente igual
// console.log(5 === 5) //true 
// console.log(5 === '5') //true 

// //Operação >, >=, <, <=

// console.log(5 > 6) //fase
// console.log(18 >= 18) // true

// console.log(7 < 7) // false
// console.log(9 <= 12) //

// //Operadores lógicos:  E, OU , NOT

// // Operador E:
// let idade = 18
// let dinheiros = 100

// console.log(false && false) // false

// // dinheiro > 200, idade >= 18
// console.log(dinheiros > 200 && idade >= 18) // false 
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(true && true) // True

// //Operador OU:

// let milhas = 1000
// let dinheiroNoBanco = 1500

// console.log(milhas > 1000 || dinheiroNoBanco > 1000) // true

// console.log(false || false) // false
// console.log(false || true) // true
// console.log(true || false) //true
// console.log(true || true) // true


let email = 'meuemail@email.com' 


if (!email) {
    console.log('Mano, cê esqueceu de escrever o email!')
} else { 
    console.log('Digite sua senha:')
}

