### **Guia do Projeto: Lista de Tarefas com Prioridade**

### **Objetivo do Projeto**
Neste projeto, você vai criar uma **Lista de Tarefas** dinâmica, que permite adicionar tarefas com nome, descrição, prioridade e categoria. Além disso, você implementará funcionalidades de busca, filtragem por prioridade e exclusão de tarefas. 

### **Requisitos Funcionais**
1. **Adicionar uma nova tarefa**
   - O usuário deve poder inserir o **nome**, **descrição**, **prioridade** e **categoria** de uma nova tarefa.
   - Após a tarefa ser adicionada, ela deve ser exibida na lista de tarefas.
   - O formulário deve ser limpo após a tarefa ser adicionada.
   
2. **Renderizar as tarefas**
   - Cada tarefa adicionada deve ser exibida com o **nome**, **descrição**, **prioridade** e **categoria**.
   - A lista de tarefas deve ser exibida dinamicamente e atualizada sempre que uma nova tarefa for adicionada, filtrada ou removida.

3. **Excluir uma tarefa**
   - O usuário deve poder excluir uma tarefa da lista. Ao clicar no botão de excluir, a tarefa deve ser removida permanentemente da lista.

4. **Filtrar tarefas por prioridade**
   - O usuário deve poder filtrar as tarefas com base na **prioridade** (Alta, Média ou Baixa).
   - A lista deve ser atualizada para exibir apenas as tarefas da prioridade selecionada.

5. **Buscar tarefas pelo nome**
   - O usuário deve poder buscar uma tarefa específica pelo **nome**.
   - Ao digitar o nome na barra de busca, a lista deve ser filtrada para exibir apenas as tarefas que correspondem ao nome digitado.

---

### **O que é o `taskId` e por que ele é importante?**

O `taskId` é um identificador único gerado automaticamente pelo sistema para cada tarefa adicionada. Ele **não é fornecido pelo formulário**, mas sim gerado internamente quando a tarefa é criada.

#### **Por que o `taskId` é necessário?**
1. **Identificação única**: O `taskId` garante que cada tarefa seja identificada de maneira única, mesmo que várias tarefas tenham o mesmo nome ou prioridade.
2. **Operações como excluir e editar**: Quando o usuário clica no botão de excluir, o `taskId` permite ao sistema saber exatamente qual tarefa remover.
3. **Buscar e filtrar tarefas**: O `taskId` ajuda o sistema a encontrar uma tarefa específica no array, mesmo que existam outras tarefas semelhantes.

#### **Como o `taskId` é gerado?**
O `taskId` é gerado utilizando a função `Date.now()`, que retorna o número de milissegundos desde 1º de janeiro de 1970. Isso garante que cada tarefa tenha um identificador único com base no tempo de criação.

Aqui está um exemplo de como o `taskId` é gerado e usado no projeto:
```javascript
function addTask(name, description, priority, category) {
    const newTask = {
        id: Date.now(),  // Gera um identificador único
        name,
        description,
        priority,
        category
    };
    tasks.push(newTask);  // Adiciona a nova tarefa ao array de tarefas
    renderTasks(tasks);   // Atualiza a lista de tarefas
}
```

---

### **Requisitos Técnicos**

No arquivo **script.js**, você encontrará o esqueleto das funções que você precisa desenvolver para completar o projeto. Abaixo estão descrições detalhadas de cada função:

---

### **1. Função `handleAddTask`**
Essa função será chamada quando o usuário clicar no botão de "Adicionar Tarefa". Ela deve capturar os valores inseridos no formulário e criar uma nova tarefa no sistema.

#### Tarefas dessa função:
- Capturar os valores dos elementos do formulário (nome, descrição, prioridade e categoria).
- Gerar o `taskId` automaticamente com `Date.now()`.
- Adicionar a nova tarefa ao array `tasks`.
- Chamar a função `renderTasks()` para exibir a tarefa na lista.

---

### **2. Função `clearTaskForm`**
Após a tarefa ser adicionada, você deve limpar o formulário. Essa função deve:
- Limpar todos os campos de entrada (`input` e `textarea`) e resetar os seletores de prioridade e categoria para seus valores padrão.

---

### **3. Função `renderTasks(tasks)`**
Essa função será responsável por renderizar as tarefas na tela. Toda vez que uma nova tarefa for adicionada ou excluída, essa função deve ser chamada para atualizar a lista.

#### Tarefas dessa função:
- Receber o array de tarefas como parâmetro.
- Limpar o contêiner de tarefas existente.
- Para cada tarefa no array, criar um cartão que exiba o **nome**, **descrição**, **prioridade** e **categoria** da tarefa.
- Adicionar um botão de excluir para cada tarefa, associado ao `taskId`.

---

### **4. Função `deleteTask(taskId)`**
Essa função deve permitir que o usuário remova uma tarefa da lista. Quando o botão de excluir for clicado, a tarefa correspondente deve ser removida do array de tarefas e a lista deve ser renderizada novamente.

#### Tarefas dessa função:
- Receber o `taskId` como parâmetro.
- Filtrar o array de tarefas para remover a tarefa correspondente ao `taskId`.
- Atualizar o array `tasks` e chamar a função `renderTasks()` para exibir a lista atualizada.

---

### **5. Função `filterTasksByPriority(priority)`**
O usuário deve poder filtrar as tarefas com base na prioridade (Alta, Média ou Baixa). A função deve receber a prioridade selecionada como parâmetro e exibir apenas as tarefas que correspondem a essa prioridade.

#### Tarefas dessa função:
- Filtrar o array de tarefas com base na prioridade.
- Chamar `renderTasks()` para exibir apenas as tarefas filtradas.

---

### **6. Função `searchTasks()`**
O usuário deve poder buscar tarefas pelo nome. A função deve capturar o valor digitado na barra de busca e filtrar as tarefas com base no nome.

#### Tarefas dessa função:
- Capturar o valor do campo de busca.
- Filtrar as tarefas cujo nome contém o valor digitado.
- Chamar `renderTasks()` para exibir as tarefas correspondentes.

---

### **Funções de Evento**
Os eventos já estão configurados no arquivo `script.js`. Quando o botão de adicionar ou buscar for clicado, as funções correspondentes serão chamadas:
- `add-task-btn`: Chama `handleAddTask()` ao ser clicado.
- `search-btn`: Chama `searchTasks()` ao ser clicado.

---

### **Exemplo de Estrutura de Dados**
Aqui está um exemplo da estrutura de uma tarefa dentro do array `tasks`:

```javascript
{
    id: 1623456789123,   // Um identificador único (gerado pelo Date.now())
    name: "Estudar JavaScript",  // Nome da tarefa
    description: "Focar em funções assíncronas",  // Descrição da tarefa
    priority: "alta",   // Prioridade: alta, média ou baixa
    category: "estudo"  // Categoria: trabalho, pessoal, outros
}
```

---

