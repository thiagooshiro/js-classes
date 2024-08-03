## Aula 11: Funções Agregadoras e Objetos em JavaScript

### Introdução

Bem-vindos à Aula 11 de JavaScript!

Hoje iremos explorar funções agregadoras, também conhecidas como "Higher Order Functions". Essas funções permitem realizar operações de agregação em coleções de dados, como arrays, e são essenciais para manipular e transformar dados de maneira eficiente.

Funções agregadoras são métodos de array que permitem combinar, acumular ou transformar elementos de uma coleção. Alguns exemplos comuns são `reduce`, `map`, `filter`, e `forEach`.

Cada arquivo que possuí o nome da função agregadora é um arquivo de exemplo de uso daquela função.

`map` e `filter` possuem dois arquivo de exemplo e `reduce` possui três arquivos de exemplo.

O objetivo desses arquivos de exemplo é servirem como referência de usos em casos mais simples e mais complexos dessas funções agregadoras.


## Um pequeno desvio: Introdução a Objetos;

Além das funções agregadoras, vamos revisar rapidamente o conceito de objetos em JavaScript.

### Definição de Objeto

Objetos são coleções de pares chave-valor. Cada chave é associada a um valor que pode ser de qualquer tipo.

**Exemplo:**

```javascript
// Definição de um objeto
let pessoa = { nome: 'Amanda', idade: '28', profissao: 'professora' };

// Acessando propriedades do objeto
console.log(pessoa.nome); // Amanda
console.log(pessoa['idade']); // 28
```

*Explicação:* Objetos permitem armazenar dados estruturados em pares chave-valor. As propriedades podem ser acessadas usando a sintaxe de ponto ou colchetes.

### Desestruturação de Objetos

A desestruturação permite extrair valores de um objeto e atribuí-los a variáveis individuais.

**Exemplo:**

```javascript
// Desestruturação do objeto
const { idade, profissao } = pessoa;
console.log(idade); // 28
console.log(profissao); // professora
```

*Explicação:* A desestruturação facilita a extração de múltiplas propriedades de um objeto e a atribuição direta a variáveis.

## Recursos Adicionais

Para aprender mais sobre os métodos de array e objetos, consulte os seguintes recursos:

- [MDN Web Docs: Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs: Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN Web Docs: Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)



Aqui estão os links para a documentação dos métodos `map` e `reduce`:

### MDN Web Docs

- **[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**: Documentação do método `map`.
- **[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**: Documentação do método `reduce`.

### W3Schools

- **[JavaScript Array map() Method](https://www.w3schools.com/js/js_array_map.asp)**: Guia sobre o método `map`.
- **[JavaScript Array reduce() Method](https://www.w3schools.com/js/js_array_reduce.asp)**: Guia sobre o método `reduce`.

Esses recursos oferecem uma visão abrangente sobre como usar esses métodos e são ótimos para revisão e referência.

## Conclusão

Hoje aprendemos sobre funções agregadoras e a manipulação de objetos em JavaScript. Pratique com os exemplos fornecidos e explore mais sobre esses métodos para aprimorar suas habilidades.
```
