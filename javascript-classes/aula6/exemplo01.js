// Estrutura básica de funções:

// A palavra-chave em JavaScript para declarar uma função é "function" seguida pelo nome da função:

function boasVindas(nome) {
    return `Seja bem-vindo ${nome}`;
}

// Qualquer palavra que venha dentro dos parênteses da função quando esta é declarada é chamada de parâmetro da função. Nesse caso, temos o parâmetro "nome".

// Parâmetros são como valores coringas; o valor de um parâmetro deverá ser informado quando a função for executada. Para executarmos nossa função, basta "chamar" seu nome e colocar parênteses em seguida, informando dentro dos parênteses qual valor do parâmetro "nome":

boasVindas('Mariana');  // Aqui o valor do parâmetro nome é a string "Mariana"
boasVindas(42); // Aqui o valor do parâmetro nome é o número 42

// "return" é a palavra reservada que define qual resposta a função oferece. Nessa execução, não poderemos visualizar isso porque não estamos utilizando o método console.log()

// Mas se executarmos as funções dessa forma, poderemos ver:

console.log(boasVindas('Mariana')); 

let resultado = boasVindas(42);
console.log(resultado);

// As duas formas são válidas para trabalhar com o retorno da função. A primeira executa a função "dentro" do console.log(). Depois que essa função mais interna é resolvida, o console.log é executado e nos dá a mensagem no terminal: "Seja bem-vindo Mariana".

// A segunda execução armazena o retorno da função na variável resultado e exibe o valor de resultado através do método console.log na linha 23.
