function churras(){
    // recupera os dados do usuário
    let convidados = Number(document.getElementById("convidados").value)
    let total = convidados * 400 // em gramas
    let totalKg = total / 1000 // em kilos
    document.getElementById("resultadoCarne").innerText = 
            "Total em kg " + totalKg.toFixed(2)
}
function febre(){
    let temperatura = Number(document.getElementById("temperatura").value)
    if (temperatura >= 37.5){
        document.getElementById("resultadoFebre").innerText = "Está com febre"
    }
    else {
        document.getElementById("resultadoFebre").innerText = "Temperatura normal"
    }
}