### **Parte 1: Conceitos Fundamentais sobre JSON**

#### **1. Introdução ao JSON**

**O que é JSON?**
- **JSON** (JavaScript Object Notation) é um formato de intercâmbio de dados baseado em texto.
- É fácil para humanos lerem e escreverem, e também é fácil para máquinas interpretarem e gerarem.
- **Uso Principal**: JSON é amplamente usado para transmitir dados entre um servidor e um cliente, como entre um backend e um frontend na web.

**Por que JSON?**
- **Leveza**: JSON é menos verboso que XML e mais fácil de manipular em JavaScript.
- **Compatibilidade**: JSON é suportado nativamente por JavaScript e por muitas outras linguagens de programação.
- **Estrutura Simples**: JSON utiliza uma estrutura baseada em pares chave/valor.

**Exemplo Simples de JSON:**
```json
{
    "nome": "Ana",
    "idade": 28,
    "casado": false
}
```

#### **2. Estrutura de Dados em JSON**

**Tipos de Dados Suportados pelo JSON:**
- **Strings**: Sequências de caracteres entre aspas duplas.
  ```json
  "nome": "Carlos"
  ```
- **Números**: Valores numéricos, sem aspas.
  ```json
  "idade": 35
  ```
- **Booleanos**: `true` ou `false`, sem aspas.
  ```json
  "ativo": true
  ```
- **Arrays**: Listas de valores, delimitadas por colchetes `[]`.
  ```json
  "cidades": ["São Paulo", "Rio de Janeiro", "Curitiba"]
  ```
- **Objetos**: Conjuntos de pares chave/valor, delimitados por chaves `{}`.
  ```json
  {
      "rua": "Av. Paulista",
      "numero": 1000
  }
  ```
- **Null**: Representa um valor nulo.
  ```json
  "projeto": null
  ```

**Exemplo de JSON Mais Complexo:**

```json
{
    "nome": "Carlos",
    "idade": 35,
    "cidades_visitadas": ["São Paulo", "Rio de Janeiro", "Curitiba"],
    "endereço": {
        "rua": "Av. Paulista",
        "numero": 1000,
        "cidade": "São Paulo",
        "estado": "SP"
    }
}
```

**Regras de Sintaxe:**
- **Chaves e Strings**: Sempre entre aspas duplas `" "`.
- **Números**: Escritos sem aspas.
- **Booleanos e Null**: Especificados sem aspas (`true`, `false`, `null`).
- **Virgulas**: Usadas para separar pares chave/valor dentro de objetos e elementos dentro de arrays.

#### **3. Trabalhando com JSON em JavaScript**

**Convertendo Objeto JavaScript em JSON:**
- Em JavaScript, você pode facilmente converter um objeto para uma string JSON usando o método `JSON.stringify()`.

**Exemplo:**
```javascript
const pessoa = {
    nome: "Ana",
    idade: 28,
    casado: false
};

const jsonString = JSON.stringify(pessoa);
console.log(jsonString);
// Saída: {"nome":"Ana","idade":28,"casado":false}
```

**Convertendo JSON para Objeto JavaScript:**
- Para converter uma string JSON de volta para um objeto JavaScript, você usa o método `JSON.parse()`.

**Exemplo:**
```javascript
const jsonString = '{"nome":"Ana","idade":28,"casado":false}';

const pessoa = JSON.parse(jsonString);
console.log(pessoa.nome); // Saída: Ana
```

**Manipulando Dados JSON:**
- Depois de converter um JSON em um objeto JavaScript, você pode manipular os dados usando a notação de ponto ou colchetes.

**Exemplo:**
```javascript
pessoa.idade = 29;
console.log(pessoa.idade); // Saída: 29
```

**Trabalhando com Arrays em JSON:**
- JSON suporta arrays, que podem conter qualquer tipo de dados, incluindo outros objetos JSON.

**Exemplo de JSON com Arrays:**
```json
{
    "turma": "3B",
    "professor": "José",
    "alunos": [
        {"nome": "Maria", "nota": 9},
        {"nome": "João", "nota": 8},
        {"nome": "Pedro", "nota": 7}
    ]
}
```

**Acessando Dados de Arrays:**
```javascript
const turma = {
    turma: "3B",
    professor: "José",
    alunos: [
        {nome: "Maria", nota: 9},
        {nome: "João", nota: 8},
        {nome: "Pedro", nota: 7}
    ]
};

console.log(turma.alunos[1].nome); // Saída: João
```

### **Parte 2: Exercícios Práticos sobre JSON**

Agora que os conceitos foram explicados, vamos passar para a prática com alguns exercícios.

#### **Exercício 1: Conversão de Objeto JavaScript para JSON**

**Objetivo:** Converta um objeto JavaScript para uma string JSON e exiba-a no console.

**Código Base:**
```javascript
const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 50
};

// Converta para JSON e exiba no console
const jsonString = JSON.stringify(produto);
console.log(jsonString);
```

#### **Exercício 2: Conversão de JSON para Objeto JavaScript**

**Objetivo:** Converta uma string JSON que representa um produto em um objeto JavaScript e acesse suas propriedades.

**Código Base:**
```javascript
const jsonString = '{"nome":"Smartphone","preco":1500,"estoque":100}';

// Converta para objeto JavaScript e acesse suas propriedades
const produto = JSON.parse(jsonString);
console.log(produto.nome);  // Saída: Smartphone
console.log(produto.preco); // Saída: 1500
```

#### **Exercício 3: Manipulando um Array de Objetos JSON**

**Objetivo:** Dado um array de objetos JSON representando uma lista de alunos, calcule a média das notas.

**Código Base:**
```javascript
const alunosJSON = '[{"nome": "Maria", "nota": 9}, {"nome": "João", "nota": 8}, {"nome": "Pedro", "nota": 7}]';

// Converta a string JSON para um array de objetos
const alunos = JSON.parse(alunosJSON);

let soma = 0;
alunos.forEach(aluno => {
    soma += aluno.nota;
});
const media = soma / alunos.length;
console.log(`Média das notas: ${media}`);  // Saída: Média das notas: 8
```

#### **Exercício 4: Carregando e Manipulando JSON Externo**

**Objetivo:** Use `fetch()` para carregar dados JSON de uma API ou arquivo externo e manipule os dados.

**Código Base:**
```javascript
fetch('https://api.exemplo.com/produtos')
    .then(response => response.json())
    .then(produtos => {
        produtos.forEach(produto => {
            console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`);
        });
    })
    .catch(error => console.error('Erro ao carregar dados:', error));
```

#### **Exercício 5: Escrevendo JSON**

**Objetivo:** Crie uma função que receba informações de um aluno (nome, nota) e retorne uma string JSON.

**Código Base:**
```javascript
function criarAlunoJSON(nome, nota) {
    const aluno = {
        nome: nome,
        nota: nota
    };
    return JSON.stringify(aluno);
}

const alunoJSON = criarAlunoJSON("Carlos", 10);
console.log(alunoJSON); // Saída: {"nome":"Carlos","nota":10}
```

### **Conclusão**

**Revisão Final:**
- **JSON** é uma ferramenta essencial para a troca de dados na web.
- JavaScript oferece métodos nativos (`JSON.stringify` e `JSON.parse`) para trabalhar facilmente com JSON.
- Praticar a conversão e manipulação de JSON é crucial para desenvolver habilidades de programação para a web.

**Próximos Passos:**
- Experimentar com dados JSON mais complexos.
- Integrar o uso de JSON em projetos reais, como em APIs e sistemas web.
