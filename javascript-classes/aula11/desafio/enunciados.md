# Desafio do Zoológico;

### 1. `getSpeciesByIds(ids)`

**Descrição**: Dada uma lista de IDs de espécies, retorne uma lista de objetos que correspondem a essas IDs. Cada objeto deve representar uma espécie do zoológico e incluir todas as suas propriedades.

**Exemplo de Entrada**:
```javascript
getSpeciesByIds(['0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae']);
```

**Exemplo de Saída**:
```javascript
[
  {
    id: '0938aa23-f153-4937-9f88-4858b24d6bce',
    name: 'lions',
    popularity: 4,
    location: 'NE',
    residents: [
      { name: 'Zena', sex: 'female', age: 12 },
      { name: 'Maxwell', sex: 'male', age: 15 },
      { name: 'Faustino', sex: 'male', age: 7 },
      { name: 'Dee', sex: 'female', age: 14 }
    ]
  },
  {
    id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
    name: 'otters',
    popularity: 4,
    location: 'SE',
    residents: [
      { name: 'Neville', sex: 'male', age: 9 },
      { name: 'Lloyd', sex: 'male', age: 8 },
      { name: 'Mercedes', sex: 'female', age: 9 },
      { name: 'Margherita', sex: 'female', age: 10 }
    ]
  }
]
```

### 2. `getAnimalsOlderThan(animal, age)`

**Descrição**: Dada uma espécie de animal e uma idade, retorne um valor booleano que indica se todos os animais dessa espécie têm a idade especificada ou são mais velhos.

**Exemplo de Entrada**:
```javascript
getAnimalsOlderThan('lions', 10);
```

**Exemplo de Saída**:
```javascript
false
```

### 3. `getEmployeeByName(employeeName)`

**Descrição**: Dado o nome completo de um funcionário (primeiro nome e sobrenome), retorne o objeto correspondente ao funcionário. Se não houver um funcionário com esse nome, retorne undefined.

**Exemplo de Entrada**:
```javascript
getEmployeeByName('Nigel Nelson');
```

**Exemplo de Saída**:
```javascript
{
  id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  firstName: 'Nigel',
  lastName: 'Nelson',
  managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
  responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']
}
```

### 4. `createEmployee(personalInfo, associatedWith)`

**Descrição**: Dado um objeto com as informações pessoais de um novo funcionário e uma lista de IDs das espécies com as quais o funcionário está associado, crie um novo objeto de funcionário e adicione-o à lista de funcionários do zoológico. Retorne o novo funcionário criado.

**Exemplo de Entrada**:
```javascript
createEmployee(
  { firstName: 'Alice', lastName: 'Smith' },
  ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '78460a91-f4da-4dea-a469-86fd2b8ccc84']
);
```

**Exemplo de Saída**:
```javascript
{
  id: 'new-id', // O ID gerado automaticamente
  firstName: 'Alice',
  lastName: 'Smith',
  managers: [],
  responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '78460a91-f4da-4dea-a469-86fd2b8ccc84']
}
```

### 5. `isManager(id)`

**Descrição**: Dado o ID de um funcionário, verifique se ele é um gerente. Retorne true se o funcionário for um gerente (ou seja, se ele estiver listado como gestor de outros funcionários), e false caso contrário.

**Exemplo de Entrada**:
```javascript
isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8');
```

**Exemplo de Saída**:
```javascript
true
```

### 6. `addEmployee(id, firstName, lastName, managers, responsibleFor)`

**Descrição**: Adicione um novo funcionário ao zoológico com o ID, nome, sobrenome, lista de IDs dos gestores e lista de IDs das espécies que ele é responsável. Atualize a lista de funcionários e retorne o novo funcionário adicionado.

**Exemplo de Entrada**:
```javascript
addEmployee(
  'new-id',
  'Emma',
  'Johnson',
  ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
  ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
);
```

**Exemplo de Saída**:
```javascript
{
  id: 'new-id',
  firstName: 'Emma',
  lastName: 'Johnson',
  managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
}
```

### 7. `countAnimals(species)`

**Descrição**: Dada uma espécie de animal (ou um objeto de espécie com a lista de residentes), retorne a quantidade total de animais dessa espécie. Se nenhuma espécie for fornecida, retorne um objeto que mapeia cada espécie para o número de residentes dessa espécie.

**Exemplo de Entrada**:
```javascript
countAnimals('lions');
```

**Exemplo de Saída**:
```javascript
4
```

### 8. `calculateEntry(entrants)`

**Descrição**: Dada uma lista de tipos de ingressos (adulto, idoso, criança) com a quantidade de cada tipo, calcule o custo total de entrada para os visitantes. Se a lista estiver vazia ou undefined, retorne 0.

**Exemplo de Entrada**:
```javascript
calculateEntry({ Adult: 2, Senior: 1, Child: 3 });
```

**Exemplo de Saída**:
```javascript
175.93
```

### 9. `getAnimalMap(options)`

**Descrição**: Retorne um objeto que mapeia cada localização (Norte-Oeste, Norte-Leste, Sul-Oeste, Sul-Leste) para uma lista de espécies que estão localizadas nessa área do zoológico. A estrutura do objeto pode variar com base nas opções fornecidas, como ordenar por nome ou listar os residentes.

**Exemplo de Entrada**:
```javascript
getAnimalMap({ includeNames: true, sorted: true });
```

**Exemplo de Saída**:
```javascript
{
  'NE': [
    { species: 'lions', residents: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { species: 'giraffes', residents: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
  ],
  'NW': [
    { species: 'bears', residents: ['Edwardo', 'Hiram', 'Milan'] },
    { species: 'elephants', residents: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
    { species: 'tigers', residents: ['Esther', 'Shu'] }
  ],
  'SE': [
    { species: 'otters', residents: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
    { species: 'penguins', residents: ['Joe', 'Keri', 'Nicholas', 'Tad'] }
  ],
  'SW': [
    { species: 'frogs', residents: ['Annice', 'Cathey'] },
    { species: 'snakes', residents: ['Bill', 'Paulette'] }
  ]
}
```

### 10. `getSchedule(dayName)`

**Descrição**: Dado o nome de um dia da semana, retorne o horário de funcionamento do zoológico para esse dia. Se o nome do dia não corresponder a um dia da semana, retorne uma mensagem indicando que o zoológico está fechado nesse dia.

**Exemplo de Entrada**:
```javascript
getSchedule('Saturday');
```

**Exemplo de Saída**

:
```javascript
{
  open: '8:00 AM',
  close: '6:00 PM'
}
```

### 11. `getOldestFromFirstSpecies(id)`

**Descrição**: Dado o ID de um funcionário, encontre a primeira espécie que o funcionário é responsável e retorne o animal mais velho dessa espécie.

**Exemplo de Entrada**:
```javascript
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
```

**Exemplo de Saída**:
```javascript
[ 'Faustino', 'male', 15 ]
```

### 12. `increasePrices(percentage)`

**Descrição**: Dado um percentual de aumento, ajuste os preços de entrada para adultos, idosos e crianças de acordo com o percentual fornecido.

**Exemplo de Entrada**:
```javascript
increasePrices(10);
```

**Exemplo de Saída**:
```javascript
{
  Adult: 33.00,
  Senior: 20.00,
  Child: 15.00
}
```

### 13. `getEmployeeCoverage(idOrName)`

**Descrição**: Dado o ID ou o nome completo de um funcionário, retorne um objeto que mapeia o funcionário para as espécies que ele é responsável. Se um nome for fornecido, encontre o ID correspondente antes de buscar as espécies associadas.

**Exemplo de Entrada**:
```javascript
getEmployeeCoverage('Nigel Nelson');
```

**Exemplo de Saída**:
```javascript
{
  'Nigel Nelson': ['lions', 'giraffes']
}
```

---
