let estudante = {
    nome: 'Amanda',
    idade: 32,
    profissao: 'Professora'
}

localStorage.setItem(estudante.nome, JSON.stringify(estudante))


recuperado = JSON.parse(localStorage.getItem('Amanda'));
