//Exercício de DOM invertido
//Implemente o HTML necessário para que esse script funcione adequadamente.
//O script abaixo se trata de um jogo de "advinhe o número"
//Há um formulário onde o usuário pode inserir um número.
// Quando o formulário é enviado, o número inserido é comparado com um número aleatório gerado pelo script.
// O usuário recebe feedback se o palpite foi muito alto, muito baixo ou correto.
// As tentativas do usuário são listadas em uma lista.

document.addEventListener("DOMContentLoaded", function() {
    const guessForm = document.getElementById("guessForm");
    const guessInput = document.getElementById("guessInput");
    const resultMessage = document.getElementById("resultMessage");
    const attemptsList = document.getElementById("attemptsList");

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const userGuess = parseInt(guessInput.value);
        attempts++;
        const listItem = document.createElement("li");
        listItem.textContent = `Tentativa ${attempts}: ${userGuess}`;
        attemptsList.appendChild(listItem);

        if (userGuess === randomNumber) {
            resultMessage.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
            resultMessage.style.color = "green";
        } else if (userGuess < randomNumber) {
            resultMessage.textContent = "Muito baixo! Tente um número maior.";
            resultMessage.style.color = "red";
        } else {
            resultMessage.textContent = "Muito alto! Tente um número menor.";
            resultMessage.style.color = "red";
        }

        guessInput.value = "";
    });
});
