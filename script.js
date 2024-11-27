// Variáveis globais
let saldo = 0;
let usuario = {};

// Função para salvar o usuário
document.getElementById('save-user').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const cpf = document.getElementById('cpf').value;

  if (!nome || !sobrenome || !cpf) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  usuario = { nome, sobrenome, cpf };
  document.getElementById('user-section').style.display = 'none';
  document.getElementById('bank-section').style.display = 'block';
  alert(`Bem-vindo, ${nome}!`);
});

// Função para depositar valores
document.getElementById('depositar').addEventListener('click', () => {
  const valor = parseFloat(document.getElementById('valor').value);
  if (valor > 0) {
    saldo += valor;
    atualizarSaldo();
  } else {
    alert("Digite um valor válido!");
  }
});

// Função para sacar valores
document.getElementById('sacar').addEventListener('click', () => {
  const valor = parseFloat(document.getElementById('valor').value);
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
    atualizarSaldo();
  } else {
    alert("Saldo insuficiente ou valor inválido!");
  }
});

// Atualizar o saldo na interface
function atualizarSaldo() {
  document.getElementById('saldo').innerText = `R$ ${saldo.toFixed(2)}`;
}

// Função para encerrar a aplicação
document.getElementById('encerrar').addEventListener('click', () => {
  alert(`Obrigado por usar nosso sistema, ${usuario.nome}. Até logo!`);
  location.reload();
});