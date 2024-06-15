let inputEscrever = document.getElementById('inputzinho')
let paragraphList = document.getElementsByTagName('p')
let especial = document.getElementById('especial')
let button = document.getElementById('btn-add')

let paragraphEspecial = document.querySelector('#especial')

let allP = document.querySelectorAll('.item')

let items = document.getElementsByClassName('item')
console.log(items)

for (let item of allP) {
    console.log(item)
}

// console.log(paragraphEspecial)
// console.log(allP)

// Imprimir o valor textual de cada paragrafo (utilizando getElementsByTagName)

for (let i = 0; i < paragraphList.length; i+= 1){
    console.log(paragraphList[i].innerText)
}


// Adicionar um escutador de eventos (addEventListener) em cada um dos parágrafos.

for (let p of paragraphList){
    p.addEventListener('click', function(event){
        event.target.style.color = 'blue'
    })
}


//Capturar o valor do input utilizando getElementById - já foi capturado na linha 1
// Quando um usuario digitar algo no input esse valor deve ser replicado no paragrafo "especial"


inputEscrever.addEventListener('input', function(event){
    let text = event.target.value
    especial.innerText = text
})

// Utilizar o botão "btn-add" para adicionar o texto do input no paragrafo "especial"


button.addEventListener('click', function(){
   let valor = inputEscrever.value
   especial.innerText = valor
})