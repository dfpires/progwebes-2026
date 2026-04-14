function churras(){
    // recupera os dados do usuário
    let convidados = Number(document.getElementById("convidados").value)
    let total = convidados * 400 // em gramas
    let totalKg = total / 1000 // em kilos
    document.getElementById("resultadoCarne").innerText = 
            "Total em kg " + totalKg.toFixed(2)
}