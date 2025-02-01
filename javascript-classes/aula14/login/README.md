# **Sistema de Cadastro e Login Simulado**

## **Objetivo**

Este projeto tem como objetivo simular um sistema de **cadastro e login de usuários**, onde:

- **Os dados de usuários para testes** estão armazenados em um arquivo **`cadastros.json`**.
- **Novos cadastros** realizados através do formulário de cadastro serão armazenados no **`localStorage`** do navegad


---

## **Login**

### **Objetivo do Login:**

A página de login permite que o usuário se autentique, fornecendo seu **e-mail** e **senha**. O sistema irá verificar os dados de login fornecidos contra os dados armazenados, seja no **`cadastros.json`** ou no **`localStorage`**.

### **Requisitos para Login:**

1. **E-mail**:
   - O sistema irá verificar se o e-mail fornecido existe entre os dados de usuários.
   - Os dados de teste estão no **`cadastros.json`**.
   - Os dados de novos usuários cadastrados estarão no **`localStorage`** durante a execução da aplicação.

2. **Senha**:
   - Após verificar o e-mail, a senha fornecida será comparada com a senha armazenada.
   - Se a senha estiver correta, o usuário será autenticado e redirecionado para a página inicial.

3. **Mensagens de Erro**:
   - Caso o e-mail não exista ou a senha esteja incorreta, o sistema exibirá uma mensagem de erro na tela.

### **Fluxo do Login**:

1. O usuário preenche o formulário de login com **e-mail** e **senha**.
2. O sistema verifica o **e-mail**:
   - Se o e-mail estiver registrado (em `cadastros.json` ou `localStorage`), a senha será verificada.
   - Se a senha estiver correta, o login será bem-sucedido.
3. Se o login for bem-sucedido, o usuário será redirecionado para a página inicial.
4. Se ocorrer erro (e-mail não encontrado ou senha incorreta), o sistema mostrará um erro.

---

## **Cadastro**

### **Objetivo do Cadastro:**

A página de cadastro permite que o usuário crie uma conta fornecendo **nome**, **e-mail** e **senha**. O sistema irá registrar novos usuários, mas **somente se o e-mail não estiver registrado**.

### **Requisitos para Cadastro:**

1. **E-mail**:
   - O sistema deve validar o formato do e-mail para garantir que está correto.
   - O e-mail não pode já estar registrado, nem no **`cadastros.json`** nem no **`localStorage`**.
   
2. **Senha**:
   - A senha deve ter **pelo menos 8 caracteres**.
   
3. **Armazenamento**:
   - **Usuários de teste**: O arquivo **`cadastros.json`** já contém alguns usuários de teste. Esses dados podem ser usados para testar o login.
   - **Novos cadastros**: Quando um novo usuário se cadastrar, os dados serão armazenados no **`localStorage`** do navegador para persistência durante a sessão da aplicação.

4. **Mensagem de Sucesso**:
   - Se o cadastro for bem-sucedido, o usuário será informado com uma mensagem de sucesso (em verde).
   - Após o cadastro, o usuário será redirecionado para a página de login.

5. **Mensagens de Erro**:
   - Se o e-mail já estiver registrado, uma mensagem de erro será exibida (em vermelho).
   - Se a senha não atender aos requisitos de comprimento, uma mensagem de erro será exibida.

### **Fluxo de Cadastro**:

1. O usuário preenche o formulário com **nome**, **e-mail** e **senha**.
2. O sistema valida os dados:
   - O e-mail deve ser único e ter o formato correto.
   - A senha deve ter no mínimo 8 caracteres.
3. Se os dados forem válidos e o e-mail não estiver registrado, o sistema adicionará o usuário ao **`localStorage`**.
4. O usuário é redirecionado para a página de login com uma mensagem de sucesso.

---

## **Como Funciona o Armazenamento**

1. **Arquivo JSON (cadastros.json)**:
   - O arquivo **`cadastros.json`** contém um conjunto de dados de usuários de **teste** que podem ser utilizados para testar o login.
   - Este arquivo não é alterado durante a execução da aplicação e apenas serve como uma base para o login inicial.
   
2. **`localStorage`**:
   - Quando um novo usuário se cadastra, seus dados **nome**, **e-mail** e **senha** são armazenados no **`localStorage`** do navegador.
   - O **`localStorage`** permite que esses dados sejam persistidos enquanto o navegador estiver aberto.
   - **Limitação**: Caso o usuário limpe o cache do navegador ou feche a sessão, os dados no **`localStorage`** serão perdidos. Em um sistema real, seria utilizado um banco de dados persistente para armazenar as informações.

---

## **Limitações e Considerações**

- **Segurança**:
  - As senhas no **`localStorage`** ou no arquivo JSON estão armazenadas em **texto puro**, sem criptografia. Em um sistema real, seria necessário criptografar as senhas antes de armazená-las.
  
- **Persistência dos Dados**:
  - O sistema de persistência no **`localStorage`** tem limitações, como o armazenamento temporário. Para um sistema de produção, é necessário um backend real com banco de dados para gerenciar os dados de usuários.

---

**Boa sorte!**