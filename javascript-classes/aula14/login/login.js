// login.js

// Função que é acionada quando o formulário é submetido
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Pega os valores dos campos do formulário (e-mail, senha)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback'); // Parágrafo para exibir feedback

    // Resetando o feedback de mensagens anteriores
    feedback.textContent = '';
    feedback.style.color = '';

    // **1. Verificação de e-mail e senha**
    // Validar se o e-mail e a senha fornecidos existem e estão corretos
    // A verificação pode ser feita com base nos dados salvos anteriormente no localStorage ou arquivo JSON

    // **2. Mensagem de erro**
    // Se os dados estiverem incorretos (e-mail ou senha), exibir mensagem de erro
    // A mensagem de erro deve ser exibida no parágrafo de feedback, com o texto em vermelho

    // **3. Mensagem de sucesso**
    // Se o login for bem-sucedido, redirecionar o usuário para a página inicial
    // Exibir mensagem de sucesso se necessário (em verde)

    // **4. Prevenção de envio**
    // Caso haja algum erro de validação (e-mail ou senha errados), o formulário não será enviado
    // E a mensagem de erro será exibida
});
