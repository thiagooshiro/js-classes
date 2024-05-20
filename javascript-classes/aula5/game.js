pedra = document.getElementById('pedra').value
tesoura = document.getElementById('tesoura').value
papel = document.getElementById('papel').value
button_game = document.getElementById('game')


machineParagraph = document.getElementById('maquina')
playerParagraph = document.getElementById('jogador')
resultParagraph = document.getElementById('resultado')

gamesCounter = 0
playerWins = 0
machineWins = 0

playerChoice = ''
function choice(escolha) {
    console.log(escolha)
    playerChoice = escolha
}


function playGame() {
    if (!playerChoice) {
        alert("Por favor, escolha uma opção!");
        return;
    }

    const options = ['pedra', 'papel', 'tesoura'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    console.log("Escolha do computador:", computerChoice);
    playerParagraph.innerText = `Você escolheu: ${playerChoice}`
    machineParagraph.innerText = `A máquina escolheu: ${computerChoice}`
    

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = 'Você venceu!';
        playerWins += 1
    } else {
        result = 'Você perdeu!';
        machineWins += 1
    }
    resultParagraph.innerText = result

    gamesCounter += 1

    if (gamesCounter >= 1) {
        button_game.innerText = "Jogar Novamente"
    }

    


}