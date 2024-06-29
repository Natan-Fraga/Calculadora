function calculadora(valor1, valor2, operacao) {
    let resultado;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = 'Erro: divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
            break;
    }

    return resultado;
}