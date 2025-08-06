

function calcular() {
  let elementoInput01 = document.getElementById("input01");
  let elementoInput02 = document.getElementById("input02");
  let elementoOperacao = document.getElementById("operacao");
  let elementoResultado = document.getElementById("resultado");

  let valor1 = Number(elementoInput01.value);
  let valor2 = Number(elementoInput02.value);
  let tipoOperacao = elementoOperacao.value;

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
}

function limpar() {
  let elementoInput01 = document.getElementById("input01");
  let elementoInput02 = document.getElementById("input02");
  let elementoOperacao = document.getElementById("operacao");
  let elementoResultado = document.getElementById("resultado");

  input01.value = "";
  input02.value = "";
  resultado.innerText = "Resultado: ";
}
