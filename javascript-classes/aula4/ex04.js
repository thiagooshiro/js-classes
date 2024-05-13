// 4 -  Crie um algoritmo que exibe a tabuada de um determinado número:
// Ex - Se o valor escolhido for 3 a saída do terminal deverá ser algo mais ou menos assim:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21 
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

numero = 3

for (let i = 1; i <= 10; i+=1){
    result = numero * i
    console.log(`${numero} x ${i} = ${result}`)
    
}