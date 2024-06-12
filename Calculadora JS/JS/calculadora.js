function preencherValor(){
    numero1 = document.getElementById("numero-1").value
    numero2 = document.getElementById("numero-2").value
}

function Somar() {
    preencherValor();
    valor = parseFloat(numero1) + parseFloat(numero2);
}

function Subtrair(){
    preencherValor();
    valor = parseFloat(numero1) - parseFloat(numero2);
}

function Multiplicar(){
    preencherValor();
    valor = parseFloat(numero1) * parseFloat(numero2);
}

function Dividir(){
    preencherValor();
    valor = parseFloat(numero1) / parseFloat(numero2);
}

function setter(){

    document.getElementById("Resultado").value = valor;
    historico();
}
function historico(){
    document.getElementById("Historico").value += numero1 + "" + "" + numero2 + " = " + valor;
}