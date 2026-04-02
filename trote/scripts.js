function calcular(){
    // JS é uma linguagem não tipada (sem tipo de dados)
    // Number() é uma função que converte texto em número
    // recupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    // recupera o valor informado no elemento com id qtdeFeijao
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    // recupera o valor informado no elemento com id qtdeOleo
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    // recupera o valor informado no elemento com id qtdeMacarrao
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)

    // calcula o valor total de pontos dos itens avulsos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    // calcula o valor total das metas
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= 60) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > 60){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - 60) * 83.33
        }
    }
    else {
        pontos = pontos + kitAlimentacao * 83.33
    }
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}