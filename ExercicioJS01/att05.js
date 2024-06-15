function att05() {
    dsNome = prompt("Digite seu nome")
    nrIdade = prompt("Digite sua idade")
    dsCidade = prompt("Digite sua cidade")

    if (dsNome != null && dsNome != "") {
        document.getElementById("texto").innerHTML += `Seu nome é ${dsNome}, `
    }
    else{
        document.getElementById("texto").innerHTML += `Voce não digitou seu nome `
    }
    if (nrIdade != null && nrIdade != "") {
        document.getElementById("texto").innerHTML += `sua idade é ${nrIdade}, `
    }
    else{
        document.getElementById("texto").innerHTML += `voce não digitou sua idade `
    }
    if (dsCidade != null && dsCidade != "") {
        document.getElementById("texto").innerHTML += `você mora em ${dsCidade}. <div></div>`
    } 
    else{
        document.getElementById("texto").innerHTML += `voce não digitou sua cidade. <div></div>`
    }
    
}
