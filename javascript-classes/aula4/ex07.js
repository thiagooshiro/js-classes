// 7 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original.
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']
const lista = ["Mariana", "Luiz", "João", "Amanda"];

for (nome in lista) {
    let palavra = ''
    for (caracter in nome) {
        palavra = caracter + palavra
    }
}