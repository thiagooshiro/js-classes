//Funções "anônimas":

//Existe uma tereceira forma de estruturar uma função, e uma delas é estrutura-la como uma função anonima;

// Começamos por declarar uma variável do tipo "const" e depois atribuir para ela uma function, que em si não tem nome.
// Existem outros exemplos de estrutura de funções anonimas, veremos eles nas aulas seguintes.

const minhaFunction = function (numero) {
    if (numero > 0) {
        return 'Esse número é positivo'
    } else {
        return 'Esse número é negativo'
    }
}


console.log(minhaFunction(24))