
## Dicas de Implementação

### 1. **Dica para `getSpeciesByIds(ids)`**
- **Uso de `.find()`**: Utilize o método `.find()` em um array para localizar um objeto com um ID específico.
- **Iteração**: Se você precisa retornar múltiplos IDs, considere usar `.filter()` para criar uma nova lista com os objetos correspondentes.

### 2. **Dica para `getAnimalsOlderThan(animal, age)`**
- **Uso de `.every()`**: Utilize o método `.every()` para verificar se todos os animais de uma espécie atendem à condição de idade.
- **Comparação de Idade**: Certifique-se de que está comparando a idade dos animais com o parâmetro `age` corretamente.

### 3. **Dica para `getEmployeeByName(employeeName)`**
- **Uso de `.find()`**: Utilize o método `.find()` para localizar o objeto do funcionário com base no nome completo.
- **Quebra do Nome**: Se necessário, divida o `employeeName` em primeiro nome e sobrenome para facilitar a busca.

### 4. **Dica para `createEmployee(personalInfo, associatedWith)`**
- **Estrutura do Objeto**: Certifique-se de que o objeto do novo funcionário segue o mesmo formato dos objetos existentes.
- **Associação**: Adicione a associação às espécies corretamente e atualize a lista de funcionários.

### 5. **Dica para `isManager(id)`**
- **Verificação de Gerentes**: Utilize métodos como `.some()` para verificar se o ID está listado como um gerente de outros funcionários.

### 6. **Dica para `addEmployee(id, firstName, lastName, managers, responsibleFor)`**
- **Atualização da Lista**: Certifique-se de adicionar o novo funcionário à lista existente e atualizar as informações de gerentes e responsabilidades.

### 7. **Dica para `countAnimals(species)`**
- **Contagem**: Utilize métodos como `.length` para contar o número de residentes de uma espécie.
- **Objeto de Contagem**: Se nenhuma espécie for fornecida, use `.reduce()` para criar um objeto que mapeia cada espécie para o número de residentes.

### 8. **Dica para `calculateEntry(entrants)`**
- **Cálculo de Custos**: Multiplique a quantidade de cada tipo de ingresso pelo custo correspondente e some os valores.
- **Tratamento de Dados**: Verifique se `entrants` é vazio ou `undefined` antes de realizar o cálculo.

### 9. **Dica para `getAnimalMap(options)`**
- **Mapeamento**: Crie um objeto que mapeia as áreas do zoológico para as espécies localizadas lá.
- **Opções**: Use as opções fornecidas para determinar a ordenação ou a estrutura do resultado.

### 10. **Dica para `getSchedule(dayName)`**
- **Verificação de Dia**: Use uma estrutura condicional para verificar o nome do dia e retornar o horário de funcionamento correspondente.

### 11. **Dica para `getOldestFromFirstSpecies(id)`**
- **Primeira Espécie**: Encontre a primeira espécie associada ao funcionário e determine o animal mais velho usando `.sort()` ou `.reduce()`.

### 12. **Dica para `increasePrices(percentage)`**
- **Cálculo de Aumento**: Aplique o percentual de aumento aos preços existentes e atualize o objeto de preços.

### 13. **Dica para `getEmployeeCoverage(idOrName)`**
- **Busca de Funcionário**: Se o parâmetro é um nome, converta-o em um ID usando `getEmployeeByName`.
- **Cobertura**: Retorne um objeto mapeando o funcionário para as espécies que ele é responsável.

---

## Links Úteis

- [**MDN Web Docs: Array.prototype.find()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [**MDN Web Docs: Array.prototype.filter()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [**MDN Web Docs: Array.prototype.every()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [**MDN Web Docs: Array.prototype.some()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [**MDN Web Docs: Array.prototype.reduce()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [**W3Schools: JavaScript Array Methods**](https://www.w3schools.com/js/js_array_methods.asp)

---