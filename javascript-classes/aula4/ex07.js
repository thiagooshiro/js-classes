// 7 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original.
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']
const lista = ["Mariana", "Luiz", "João", "Amanda"];

for (nome of lista) {
    let palavra = ''
    for (let caracter of nome) {
        if (palavra.length === 0) {
            caracter = caracter.toLowerCase()
        }
        
        if (palavra.length == nome.length - 1) {
            caracter = caracter.toUpperCase()
        }
        palavra = caracter + palavra
        

        
    }
    console.log(palavra)
}