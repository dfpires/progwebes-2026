function calcular(){
    // JS é uma linguagem não tipada (sem tipo de dados)
    // Number() é uma função que converte texto em número

    /* recupera valores de itens avulsos */

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
    // recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaKit // declara meta de kit alimentação
    let metaSuplemento // declaração meta de suplemento
    if (cor == "amarela"){
        metaKit = 54
        metaSuplemento = 27
    }
    else if (cor == "cinza"){
        metaKit = 51
        metaSuplemento = 26
    }
    else if (cor == "laranha"){
        metaKit = 21
        metaSuplemento = 11
    }
    else if (cor == "marron"){
        metaKit = 88
        metaSuplemento = 44
    }
    else if (cor == "preta"){
        metaKit = 60
        metaSuplemento = 30
    }
    // calcula pontuação do kit de alimentação
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > metaProva1){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000 / metaKit)
    }
    // cacula pontuação do suplemento
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if (qtdeLatas >= metaSuplemento){
        pontos = pontos + 5000
        if (qtdeLatas > metaSuplemento){
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else  {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}