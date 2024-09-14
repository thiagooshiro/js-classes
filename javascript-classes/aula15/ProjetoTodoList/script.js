// Função para capturar dados da tarefa e adicionar
function handleAddTask() {
    const taskName = document.getElementById('task-name').value.trim();
    const taskDesc = document.getElementById('task-desc').value.trim();
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;

    // # Escreva o código para adicionar a nova tarefa com os dados capturados
}

// Função para limpar o formulário após adicionar a tarefa
function clearTaskForm() {
    // # Escreva o código para limpar os campos do formulário
}

// Função para filtrar tarefas por prioridade
function filterTasksByPriority(priority) {
    // # Escreva o código para filtrar as tarefas com base na prioridade
}

// Função para excluir uma tarefa
function deleteTask(taskId) {
    // # Escreva o código para excluir a tarefa com o ID fornecido
}

// Função para buscar tarefas pelo nome
function searchTasks() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    // # Escreva o código para buscar as tarefas pelo nome
}

// Evento para adicionar tarefa ao clicar no botão
document.getElementById('add-task-btn').addEventListener('click', handleAddTask);

// Evento para buscar tarefas (ao clicar no botão de busca)
document.getElementById('search-btn').addEventListener('click', searchTasks);

// Inicializando um array de tarefas (vazio)
let tasks = [];

// Função para renderizar tarefas (vazia para ser completada)
function renderTasks(tasks) {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = ''; // Limpa o contêiner antes de renderizar as tarefas

    // # Escreva o código para renderizar as tarefas na página
}
renderTasks()