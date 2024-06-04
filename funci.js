function realizarOperacion(operador, valor1, valor2) {
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 != 0) {
                return valor1 / valor2;
            } else {
                return "Error: División por cero";
            }
        default:
            return "Error: Operador no válido";
    }
}

function calcular(operador) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const resultado = realizarOperacion(operador, valor1, valor2);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function limpiarCampo(campoId) {
    document.getElementById(campoId).value = '';
}
