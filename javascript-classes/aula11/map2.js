// map2.js

// Enunciado:
// Dado um array de objetos representando funcionários, crie um novo array com strings
// formatadas que contêm o nome completo, a posição e o status de emprego de cada funcionário.

const funcionarios = [
    { primeiroNome: 'Carlos', ultimoNome: 'Silva', cargo: 'Desenvolvedor', ativo: true },
    { primeiroNome: 'Ana', ultimoNome: 'Costa', cargo: 'Designer', ativo: false },
    { primeiroNome: 'João', ultimoNome: 'Oliveira', cargo: 'Gerente', ativo: true },
    { primeiroNome: 'Maria', ultimoNome: 'Fernandes', cargo: 'QA', ativo: true }
  ];
  
  const informacoesFormatadas = funcionarios.map((funcionario) => {
    return `${funcionario.primeiroNome} ${funcionario.ultimoNome} - ${funcionario.cargo} (Status: ${funcionario.ativo ? 'Ativo' : 'Inativo'})`;
    // O map cria uma string formatada para cada funcionário com seu nome completo, cargo e status de emprego.
  });
  
  console.log(informacoesFormatadas);
  // Saída esperada:
  // [
  //   'Carlos Silva - Desenvolvedor (Status: Ativo)',
  //   'Ana Costa - Designer (Status: Inativo)',
  //   'João Oliveira - Gerente (Status: Ativo)',
  //   'Maria Fernandes - QA (Status: Ativo)'
  // ]
  