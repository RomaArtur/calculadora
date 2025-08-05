console.log('Script carregado!')

function calcular() {
    console.log("Função calcular chamada");
    const input1 = document.getElementById('input01');
    const input2 = document.getElementById('input02');
    const valor1 = Number(input1.value);
    const valor2 = Number(input2.value);
    console.log(valor1);
    console.log(valor2);

    const operacao = document.getElementById('operacao');
    const tipoOperacao = operacao.value;
    console.log(tipoOperacao); 
}

