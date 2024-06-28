// Exemplo 3 - Arrow Function:

// Existe outra forma de declararmos uma função em JavaScript, declarando-a como uma "arrow function";

const myFunction = (parametro1, parametro2) => {
    let a = parametro1;
    let b = parametro2;
    return [a, b]; // É possível manipular o retorno da função para devolver a informação no formato que desejarmos. Neste caso, a função retorna um array composto por a e b.
}

console.log(myFunction(3, 4));

// A estrutura da arrow function consiste da palavra reservada "const" seguida do nome da variável, sinal de igualdade, parênteses (e dentro dos parênteses vão os parâmetros), outro sinal de igual e o sinal de > (maior que), seguidos finalmente pelas chaves.

// As duas funções a seguir são idênticas com exceção do nome da função (que não pode ser repetido):

const essaFuncao = (msg) => {
    console.log(msg);
    return msg;
}

function outraFuncao(msg) {
    console.log(msg);
    return msg;
}

// Arrow functions recebem esse nome por causa dessa estrutura "=>" que lembra uma flecha... 
// Não é uma estrutura muito bonita, mas é importante saber e experimentar usar porque é amplamente utilizada.
