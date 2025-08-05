console.log('Script carregado!')

function calcular() {
    console.log("Função calcular chamada");
    let input1 = document.getElementById('input01');
    let input2 = document.getElementById('input02');
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    console.log(valor1);
    console.log(valor2);

    let operacao = document.getElementById('operacao');
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
            resultado = valor1 / valor2;
            break;
        default:
            resultado = alert('Operação inválida');
    }

    console.log(resultado);

}



