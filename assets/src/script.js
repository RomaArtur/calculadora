console.log("Script carregado!");

function calcular() {
  console.log("Função calcular chamada");
  let elementoInput01 = document.getElementById("input01");
  let elementoInput02 = document.getElementById("input02");
  let elementoResultado = document.getElementById("resultado");
  let valor1 = Number(elementoInput01.value);
  let valor2 = Number(elementoInput02.value);
  console.log(valor1);
  console.log(valor2);

  let elementoOperacao = document.getElementById("operacao");
  let tipoOperacao = operacao.value;
  console.log(tipoOperacao);

  let resultado;

  switch (tipoOperacao) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      if (valor2 !== 0) {
        resultado = valor1 / valor2;
      } else {
        alert("Erro: divisão por zero!");
        resultado = "";
      }
  }
  elementoResultado.innerText = `Resultado: ${resultado}`;
  console.log(resultado);
}

function limpar() {
    let elementoInput01 = document.getElementById("input01");
    let elementoInput02 = document.getElementById("input02");
    let elementoOperacao = document.getElementById('operacao');
    let elementoResultado = document.getElementById("resultado");
    input1.value = '';
    input2.value = '';
    operacao.selectedIndex = 0
    resultado.innerText = 'Resultado: ';
}