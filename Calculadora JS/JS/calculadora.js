function preencherValor() {
    numero1 = parseFloat(document.getElementById("numero-1").value)
    numero2 = parseFloat(document.getElementById("numero-2").value)
}

function Somar() {
    preencherValor();
    valor = (numero1) + (numero2);
    operacao = 1;
}

function Subtrair() {
    preencherValor();
    valor = (numero1) - (numero2);
    operacao = 2;
}

function Multiplicar() {
    preencherValor();
    valor = (numero1) * (numero2);
    operacao = 3;
}

function Dividir() {
    preencherValor();
    valor = (numero1) / (numero2);
    operacao = 4;
}

function setter() {
    if(isNaN(numero1) || isNaN(numero2) || isNaN(valor) || valor == Infinity){
        document.getElementById("resultado").value = "valor invalido";
    }
    else{
        document.getElementById("resultado").value = valor;
    }

    historico();
}
function limparValores() {
    numero1 = "";
    numero2 = "";
    valor = "";
    document.getElementById("numero-1").value = "";
    document.getElementById("numero-2").value = "";
    document.getElementById("resultado").value = "";
}
function limparHistorico() {
    document.getElementById("Historico").value = "";
}
function historico() {
    if (isNaN(numero1) || isNaN(numero2) || isNaN(valor)) {}
    else {
        switch (operacao) {
            case 1:
                if (valor == Infinity) {}
                else {
                    document.getElementById("Historico").innerHTML += numero1 + " " + "+" + " " + numero2 + " = " + valor + ".&#10;";
                }
                break;
            case 2:
                if (valor == Infinity) {}
                else {
                    document.getElementById("Historico").innerHTML += numero1 + " " + "-" + " " + numero2 + " = " + valor + ".&#10;";
                }
                break;
            case 3:
                if (valor == Infinity) {}
                else {
                    document.getElementById("Historico").innerHTML += numero1 + " " + "*" + " " + numero2 + " = " + valor + ".&#10;";
                }
                break;
            case 4:
                if (valor == Infinity) {}
                else {
                    document.getElementById("Historico").innerHTML += numero1 + " " + "/" + " " + numero2 + " = " + valor + ".&#10;";
                }
                break;
        }
    }
}