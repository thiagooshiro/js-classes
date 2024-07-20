
//Exercício de DOM invertido: Considerando o script abaixo, implemente o HTML de modo que:
//Há um botão que, quando clicado, muda a cor de um texto para azul.
//Um novo parágrafo é adicionado à página com o texto "Este é um novo parágrafo adicionado pelo JavaScript."
//Elementos com a classe "item" recebem um conteúdo de texto que identifica sua ordem (por exemplo, "Item 1", "Item 2", etc.).


document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("changeColorButton");
const text = document.getElementById("text");

button.addEventListener("click", function() {
    text.style.color = "blue";
});

const newElement = document.createElement("p");
newElement.textContent = "Este é um novo parágrafo adicionado pelo JavaScript.";
document.body.appendChild(newElement);

const items = document.getElementsByClassName("item");
for(let i = 0; i < items.length; i++) {
    items[i].textContent = `Item ${i + 1}`;
}   
});
