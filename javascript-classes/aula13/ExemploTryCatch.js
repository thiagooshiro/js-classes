//Ex 01 Quando temos um erro.

try {
    // Tentando converter uma string em número
    let result = { nome:  'Mariana'}; // Isso não é um número válido
    console.log(result.toUpperCase()); // Não será executado se ocorrer um erro
} catch (error) {
    // Este bloco será executado se ocorrer um erro
    // console.error(`Erro ao converter: ${error.message}`);
    // O `error.message` fornece uma mensagem sobre o erro ocorrido
}

// console.log('Bom dia Turma!')

//Ex02 Quando o "try" funciona

try {
    //Tentando converter uma string em número
   let result = parseInt("123"); // String válida para conversão
   console.log("Resultado da conversão:", result);
    //A conversão é bem-sucedida, então o código continua normalmente
} catch (error) {
    //Este bloco não será executado, pois não ocorreu erro
   console.error("Erro inesperado:", error.message);
   console.log('Olá turma 707')
}


//Ex03  Sintaxe com "finally"


try {
    //Tentando acessar um índice fora dos limites do array
   let numbers = [1, 2, 3];
    let number = numbers[5]; // Índice que não existe no array
    if (number === undefined) {
        throw new Error("Índice fora dos limites do array.");
    }
    console.log(number);
} catch (error) {
    //Este bloco será executado se ocorrer um erro
    console.error("Erro ao acessar o índice do array:", error.message);
} finally {
    //Este bloco será sempre executado, independentemente de ter ocorrido um erro ou não
    console.log("Bloco finally executado.");
}
