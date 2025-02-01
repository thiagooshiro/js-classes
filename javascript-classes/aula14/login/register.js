// register.js

// Função que é acionada quando o formulário é submetido
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Pega os valores dos campos do formulário (nome, e-mail, senha)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback'); // Parágrafo para exibir feedback

    // Resetando o feedback de mensagens anteriores
    feedback.textContent = '';
    feedback.style.color = '';

    // **1. Validação de e-mail**
    // Validar o e-mail com uma expressão regular para garantir que o formato esteja correto
    // Se o e-mail for inválido, exibir mensagem de erro em vermelho no parágrafo de feedback

    // **2. Validação de senha**
    // Verificar se a senha tem pelo menos 8 caracteres
    // Caso contrário, exibir mensagem de erro em vermelho

    // **3. Verificar se o e-mail já está cadastrado**
    // Checar se o e-mail fornecido já existe no cadastro (salvo no localStorage ou arquivo JSON)
    // Se já estiver registrado, exibir uma mensagem de erro

    // **4. Salvar o novo usuário**
    // Caso o e-mail seja válido e não esteja registrado, salvar o novo usuário (nome, e-mail, senha)
    // Os dados podem ser salvos em localStorage ou no arquivo JSON (em uma simulação de backend)

    // **5. Mensagem de Sucesso**
    // Se o cadastro for bem-sucedido, exibir uma mensagem de sucesso em verde no parágrafo de feedback
    // Exemplo: feedback.textContent = 'Cadastro realizado com sucesso'; feedback.style.color = 'green';

    // **6. Prevenção de envio**
    // Caso haja algum erro de validação ou e-mail já registrado, o formulário não será enviado
    // A mensagem de erro será exibida no parágrafo de feedback em vermelho
});
