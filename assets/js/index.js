const display = document.querySelector('.display');

function adicionarNumero(numero) {
  if (display.value == 'Erro') {
    display.value = '';
  }
  display.value += numero;
}

function adicionarOperador(operador) {
  display.value += operador;
}

function limparVisor() {
  display.value = '';
}

function calcularResultado() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Erro'
  }
}

function apagarUltimoCaractere() {
  const valorAtual = display.value;
  display.value = valorAtual.substring(0, valorAtual.length - 1);
}

document.addEventListener('keydown', (event) => {
  const tecla = event.key;
if(/^[0-9+\-*/]$/.test(tecla)){
  event.preventDefault()
  adicionarNumero(tecla)
} else if(tecla === 'Enter') {
  event.preventDefault()
  calcularResultado()
} else if (tecla === 'Backspace'){
  event.preventDefault()
  apagarUltimoCaractere()
} else if (tecla === ',') {
  event.preventDefault()
  adicionarNumero('.')
}
})