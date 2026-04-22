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
function emprestimo(){
    let renda = Number(document.getElementById("renda").value)
    let idade = Number(document.getElementById("idade").value)
    if (renda > 2000 && idade > 18){ // condição E
        document.getElementById("resultadoEmprestimo").innerText = "Empréstimo aprovado"
    }
    else {
        document.getElementById("resultadoEmprestimo").innerText = "Empréstimo reprovado"
    }
}
function luta(){
    let idadeLuta = Number(document.getElementById("idadeLuta").value)
    let peso = Number(document.getElementById("peso").value)
    if (idadeLuta < 18){
        document.getElementById("resultadoCategoria").innerText = "Categoria juvenil"
    }
    else if (peso < 80){
        document.getElementById("resultadoCategoria").innerText = "Categoria Adulto, leve"
    }
    else {
        document.getElementById("resultadoCategoria").innerText = "Categoria Adulto, pesado"
    }
}