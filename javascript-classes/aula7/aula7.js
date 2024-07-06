// Exemplo ed sintaxe arrow function;

const minhaFunc = () => {
    return "Hello Arrow Function!"
}

//Executando a função minhaFunc dentro do método console.log.
console.log(minhaFunc())


// Funções anônimas:

const nomeProfissao = function (parametro1, parametro2) {
    return `Dados informados: ${parametro1}, ${parametro2}`
}

console.log(nomeProfissao('Thiago', 'professor'))