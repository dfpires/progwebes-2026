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
    let metaProva1 // declara a variável
    if (cor == "amarela"){
        metaProva1 = 54
    }
    else if (cor == "cinza"){
        metaProva1 = 51
    }
    else if (cor == "laranha"){
        metaProva1 = 21
    }
    else if (cor == "marron"){
        metaProva1 = 88
    }
    else if (cor == "preta"){
        metaProva1 = 60
    }

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > metaProva1){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - metaProva1) * (5000/metaProva1)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000 / metaProva1)
    }
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}