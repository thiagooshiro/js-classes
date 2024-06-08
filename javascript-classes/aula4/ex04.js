// 4 - Observe as seguintes listas:
//Crie um algirtmo que combine o valor do nome com o sobrenome formando o nome completo.
// O programa deve iterar sobre as listas fornecidas e juntar os valores correspondentes.

let nomes = ["Bruna", "Gabriel", "Marcos", "Jéssica", "Fernando", "Mariana"];
let sobrenomes = ["Oliveira", "Santos", "Marques", "Castro", "Silva"];

for (let i = 0; i < nomes.length; i+= 1) {
    if(nomes[i] && sobrenomes[i]){
    console.log(nomes[i], sobrenomes[i])
    }
}