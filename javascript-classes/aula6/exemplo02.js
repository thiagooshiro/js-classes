// Exemplo 2 - Funções sem parâmetro, funções sem retorno.

// Nem toda função possui um retorno, nem toda função possui parâmetros. Funções, como tudo em programação, são ferramentas que a gente adapta para as nossas necessidades. Elas têm uma estrutura básica, mas a partir disso, a imaginação (e a necessidade) é o limite;

// Considere a seguinte função:

function mensagemDespedida() {
    console.log("Muito obrigado por utilizar nossos serviços")
}

mensagemDespedida();

// Essa função "mensagemDespedida" não requer nenhum parâmetro;
// Quando ela é executada, ela imprime no terminal o texto que está dentro do console.log;

// Porém, considere a seguinte execução:

let resposta = mensagemDespedida();

// Qual valor está contido na variável resposta?

console.log(resposta); // E aí, adivinhou certo?


// Isso acontece porque a função "mensagemDespedida" não possui "return". Ela não "devolve" nenhuma informação após sua execução, apenas loga no terminal um texto.
